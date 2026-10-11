const target = process.env.I18N_UNUSED_TARGET || 'client';
const fs = require('node:fs');
const path = require('node:path');

/** @type {RegExp} */
const serverTranslationKeyMatcher = /\b(?:_|t|tc|translate)\(\s*[`"']([^`"']+)[`"'][^)]*\)|i18nKey\s*=\s*[`"']([^`"']+)[`"']/gi;

/**
 * Parse only the first key argument from translation calls.
 * @param {string} match
 * @returns {string|undefined}
 */
const clientMissedTranslationParser = (match) => {
  const attrMatch = match.match(/i18nKey\s*=\s*([`"'])([^`"']+)\1/i);
  if (attrMatch) {
    return attrMatch[2];
  }

  const callMatch = match.match(/\b(?:_|t|tc|translate)\(\s*([`"'])([^`"']+)\1/i);
  if (!callMatch) {
    return undefined;
  }

  return callMatch[2];
};

/**
 * Load client locale JSON and expose both raw and namespace-prefixed keys.
 * This mirrors i18next namespace access patterns used in client code.
 * @param {string} filePath
 * @returns {Record<string, unknown>}
 */
const clientLocaleFileLoader = (filePath) => {
  const locale = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const namespace = path.basename(filePath, '.json');
  const namespaced = { ...locale };

  // Add known dynamic patterns used in client code.
  if (namespace === 'user') {
    namespaced['banReason.${reason}'] = '';
  }

  if (namespace === 'achievement') {
    namespaced['${achievement.name}'] = '';
    namespaced['${achievement.name}.title.${}'] = '';
    namespaced['${achievement.name}.title.${i + 1}'] = '';
  }

  return {
    ...locale,
    [namespace]: namespaced,
    ...(namespace === 'achievement'
      ? { 'achievement:${achievement.name}.title.${i + 1}': '' }
      : {}),
  };
};

/**
 * Extract only the translation key from matched snippets.
 * This prevents false positives such as "missingParameters, user".
 * @param {string} match
 * @returns {string|undefined}
 */
const missedTranslationParser = (match) => {
  const attrMatch = match.match(/i18nKey\s*=\s*([`"'])([^`"']+)\1/i);
  if (attrMatch) {
    return attrMatch[2];
  }

  const callMatch = match.match(/\b(?:_|t|tc|translate)\(\s*([`"'])([^`"']+)\1/i);
  if (!callMatch) {
    return undefined;
  }

  const key = callMatch[2];

  // Normalize known dynamic patterns to representative concrete keys so
  // the checker can validate them without reporting false positives.
  if (/^rank\.\$\{.+\}$/.test(key)) {
    return 'rank.0';
  }

  if (/^modifier\.\$\{.+\}\.desc$/.test(key)) {
    return 'modifier.noThrows.desc';
  }

  if (/^modifier\.\$\{.+\}$/.test(key)) {
    return 'modifier.noThrows';
  }

  return key;
};

/** @type {Record<string, import('i18n-unused').RunOptions>} */
const profiles = {
  client: {
    localesPath: 'client/src/i18n/locales',
    srcPath: 'client/src',
    localeFileLoader: clientLocaleFileLoader,
    missedTranslationParser: clientMissedTranslationParser,
    ignoreComments: true,
  },
  server: {
    localesPath: 'server/i18n',
    srcPath: 'server/src',
    translationKeyMatcher: serverTranslationKeyMatcher,
    missedTranslationParser,
    ignoreComments: true,
  },
};

if (!profiles[target]) {
  throw new Error(
    `Unknown I18N_UNUSED_TARGET=\"${target}\". Use \"client\" or \"server\".`,
  );
}

module.exports = profiles[target];
