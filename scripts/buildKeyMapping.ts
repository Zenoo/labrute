import { execSync } from 'child_process';

const OLD_COMMIT = 'f9b5add9d29a456c0d1ab234d382e140c7734385';
const SPLIT_COMMIT = 'd8756dac';
const LANGUAGE = 'en';

interface Translations {
  [key: string]: string | Translations;
}

/**
 * Flatten nested object with dot notation
 */
function flattenObject(obj: Translations, prefix = ''): Map<string, string> {
  const result = new Map<string, string>();

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      result.set(fullKey, value);
    } else if (typeof value === 'object' && value !== null) {
      const nested = flattenObject(value, fullKey);
      for (const [nestedKey, nestedValue] of nested.entries()) {
        result.set(nestedKey, nestedValue);
      }
    }
  }

  return result;
}

/**
 * Read file from git commit
 */
function readFromGit(commit: string, path: string): Translations {
  try {
    const content = execSync(`git show ${commit}:${path}`, { encoding: 'utf-8' });
    return JSON.parse(content);
  } catch {
    return {};
  }
}

/**
 * Build key mapping from old structure to new files
 */
function buildMapping(): void {
  console.log('📖 Reading old translation file...');
  const oldTranslations = readFromGit(OLD_COMMIT, `client/src/assets/i18n/${LANGUAGE}.json`);
  const oldFlat = flattenObject(oldTranslations);

  console.log(`✅ Found ${oldFlat.size} keys in old file`);

  console.log('\n📖 Reading new split files...');
  const newFiles = [
    'achievement', 'achievementRanking', 'admin', 'arena', 'ascend', 'bannedUsers',
    'bruteNotFound', 'cell', 'clan', 'common', 'destiny', 'event', 'followingFeed',
    'generating', 'globalTournament', 'hall', 'home', 'inventory', 'levelUp',
    'nameChange', 'notFound', 'patchNotes', 'ranking', 'resetVisuals', 'tournament',
    'tournamentHistory', 'transferBrute', 'user', 'versus', 'wiki'
  ];

  const newTranslations = new Map<string, Translations>();
  for (const file of newFiles) {
    const content = readFromGit(SPLIT_COMMIT, `client/src/i18n/locales/${LANGUAGE}/${file}.json`);
    if (Object.keys(content).length > 0) {
      newTranslations.set(file, content);
    }
  }

  console.log(`✅ Found ${newTranslations.size} new files`);

  // Build reverse mapping: old key -> new file
  const mapping = new Map<string, string>();
  const prefixToFile = new Map<string, string>();

  // First pass: map prefixed keys (e.g., "achievements.*" -> "achievement.json")
  for (const [oldKey] of oldFlat.entries()) {
    if (oldKey.includes('.')) {
      const prefix = oldKey.split('.')[0];

      // Check for plural -> singular mapping
      if (prefix === 'achievements') {
        prefixToFile.set(prefix, 'achievement');
      } else if (prefix === 'achievementRankings') {
        prefixToFile.set(prefix, 'achievementRanking');
      } else {
        // Try to find which file contains this prefix
        for (const [fileName, content] of newTranslations.entries()) {
          const flat = flattenObject(content, fileName);
          for (const newKey of flat.keys()) {
            if (newKey.startsWith(`${fileName}.${prefix}.`) || newKey === `${fileName}.${prefix}`) {
              prefixToFile.set(prefix, fileName);
              break;
            }
          }
          if (prefixToFile.has(prefix)) break;
        }
      }
    }
  }

  // Second pass: match root-level keys by value
  const rootKeys = new Map<string, string>(); // oldKey -> value
  for (const [oldKey, value] of oldFlat.entries()) {
    if (!oldKey.includes('.')) {
      rootKeys.set(oldKey, value);
    }
  }

  console.log(`\n🔍 Mapping ${rootKeys.size} root-level keys...`);

  for (const [oldKey, oldValue] of rootKeys.entries()) {
    let found = false;

    for (const [fileName, content] of newTranslations.entries()) {
      const flat = flattenObject(content, fileName);

      // Look for exact value match with key pattern
      for (const [newKey, newValue] of flat.entries()) {
        if (newValue === oldValue) {
          // Check if the new key ends with the old key (e.g., "cell.sacrifice" ends with "sacrifice")
          const keyParts = newKey.split('.');
          if (keyParts.length === 2 && keyParts[1] === oldKey) {
            mapping.set(oldKey, fileName);
            found = true;
            break;
          }
        }
      }

      if (found) break;
    }

    if (!found) {
      // Default to common.json for unmapped root keys
      mapping.set(oldKey, 'common');
    }
  }

  // Output mapping as TypeScript code
  console.log('\n📝 Generating mapping...\n');

  console.log('// Mapping from old prefixes to new file names');
  console.log('const PREFIX_TO_FILE: Record<string, string> = {');
  for (const [prefix, file] of Array.from(prefixToFile.entries()).sort()) {
    console.log(`  '${prefix}': '${file}',`);
  }
  console.log('};');

  console.log('\n// Mapping from root-level keys to file names');
  console.log('const ROOT_KEY_TO_FILE: Record<string, string> = {');
  const sortedMapping = Array.from(mapping.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  for (const [key, file] of sortedMapping) {
    console.log(`  '${key}': '${file}',`);
  }
  console.log('};');

  console.log(`\n✅ Mapped ${prefixToFile.size} prefixes and ${mapping.size} root keys`);
}

buildMapping();
