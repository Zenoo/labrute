/// <reference types="node" />

import fs from 'node:fs';
import path from 'node:path';

type Usage = {
  filePath: string;
  key: string;
  isDynamic: boolean;
};

type LocaleFile = {
  filePath: string;
  keys: Set<string>;
};

type LocaleReport = {
  filePath: string;
  unused: string[];
};

type MissingBySourceReport = {
  filePath: string;
  missingStatic: string[];
  missingDynamic: string[];
};

type Report = {
  name: 'client' | 'server';
  byLocale: LocaleReport[];
  missingBySource: MissingBySourceReport[];
  missingStaticCount: number;
  missingDynamicCount: number;
  unusedCount: number;
};

const ROOT = process.cwd();

const CLIENT_SRC = path.join(ROOT, 'client', 'src');
const CLIENT_LOCALES = path.join(ROOT, 'client', 'src', 'i18n', 'locales');
const SERVER_SRC = path.join(ROOT, 'server', 'src');
const SERVER_LOCALES = path.join(ROOT, 'server', 'i18n');
const TARGET_LANGUAGE = 'en';

const CODE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx']);
const DEFAULT_CLIENT_NS = 'common';
const KNOWN_CLIENT_USAGE_PATTERNS = [
  'common.event.started',
];
const CONTEXT_SUFFIXES = new Set([
  'zero', 'one', 'two', 'few', 'many', 'other',
  'male', 'female', 'plural',
  '0', '1', '2', '3', '4', '5', '11', '100',
]);

const walkFiles = (dirPath: string, predicate: (filePath: string) => boolean): string[] => {
  const out: string[] = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      out.push(...walkFiles(fullPath, predicate));
      continue;
    }

    if (predicate(fullPath)) {
      out.push(fullPath);
    }
  }

  return out;
};

const stripComments = (content: string): string => (
  content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|\s+)\/\/.*$/gm, '$1')
);

const flattenObject = (obj: unknown, prefix = ''): string[] => {
  const keys: string[] = [];

  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    return keys;
  }

  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    const nextKey = prefix ? `${prefix}.${k}` : k;

    if (v && typeof v === 'object' && !Array.isArray(v)) {
      keys.push(...flattenObject(v, nextKey));
    } else {
      keys.push(nextKey);
    }
  }

  return keys;
};

const escapeRegex = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const keyPatternToRegex = (pattern: string): RegExp => {
  const escaped = escapeRegex(pattern).replace(/\\\*/g, '[^.]+');
  return new RegExp(`^${escaped}$`);
};

const normalizeTemplate = (raw: string): string => (
  raw
    .replace(/\$\{[^}]*\}/g, '*')
    .replace(/\s+/g, ' ')
    .trim()
);

const parseLiteral = (literalWithQuotes: string | undefined): string | null => {
  if (!literalWithQuotes || literalWithQuotes.length < 2) return null;

  const quote = literalWithQuotes[0];
  const body = literalWithQuotes.slice(1, -1);

  if (quote === '`') {
    return normalizeTemplate(body);
  }

  return body.replace(/\\(['"`])/g, '$1');
};

const extractTemplateVariables = (content: string): Map<string, string> => {
  const variables = new Map<string, string>();
  const pattern = /\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*`((?:\\`|[^`])*)`/g;
  let match: RegExpExecArray | null = null;

  while ((match = pattern.exec(content)) !== null) {
    const varName = match[1];
    const templateBody = match[2];

    if (!varName || templateBody === undefined) {
      continue;
    }

    variables.set(varName, normalizeTemplate(templateBody));
  }

  return variables;
};

const extractVariableCallKeys = (
  content: string,
  functionNames: Set<string>,
  variables: Map<string, string>,
): string[] => {
  const names = [...functionNames].map(escapeRegex).join('|');

  if (!names || variables.size === 0) return [];

  const pattern = new RegExp(
    `\\b(?:${names})\\s*\\(\\s*([A-Za-z_$][\\w$]*)\\b`,
    'g',
  );

  const out: string[] = [];
  let match: RegExpExecArray | null = null;

  while ((match = pattern.exec(content)) !== null) {
    const varName = match[1];
    if (!varName) continue;

    const key = variables.get(varName);
    if (key) {
      out.push(key);
    }
  }

  return out;
};

const extractCallLiterals = (content: string, functionNames: Set<string>): string[] => {
  const names = [...functionNames].map(escapeRegex).join('|');

  if (!names) return [];

  const pattern = new RegExp(
    `\\b(?:${names})\\s*\\(\\s*(`
    + '`(?:\\\\`|[^`])*`'
    + `|"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*')`,
    'g',
  );

  const out: string[] = [];
  let match: RegExpExecArray | null = null;

  while ((match = pattern.exec(content)) !== null) {
    const parsed = parseLiteral(match[1]);
    if (parsed) out.push(parsed);
  }

  return out;
};

const extractNonLiteralCallMarkers = (content: string, functionNames: Set<string>): string[] => {
  const names = [...functionNames].map(escapeRegex).join('|');

  if (!names) return [];

  // Capture first-argument identifiers/member access (e.g. t(skill.name), t(key), t(WeaponById[id])).
  // Literal calls are handled by extractCallLiterals; this parser is for dynamic-only markers.
  const pattern = new RegExp(
    `\\b(?:${names})\\s*\\(\\s*([A-Za-z_$][\\w$]*(?:\\[[^\\]]+\\]|\\.[A-Za-z_$][\\w$]*)*)`,
    'g',
  );

  const out: string[] = [];
  let match: RegExpExecArray | null = null;

  while ((match = pattern.exec(content)) !== null) {
    const marker = match[1];
    if (marker) {
      out.push(marker);
    }
  }

  return out;
};

const extractI18nKeyAttrs = (content: string): string[] => {
  const pattern = new RegExp(
    'i18nKey\\s*=\\s*(?:\\{\\s*)?(`(?:\\\\`|[^`])*`|"(?:\\\\"|[^"])*"|\'(?:\\\\\'|[^\'])*\')(?:\\s*\\})?',
    'g',
  );
  const out: string[] = [];
  let match: RegExpExecArray | null = null;

  while ((match = pattern.exec(content)) !== null) {
    const parsed = parseLiteral(match[1]);
    if (parsed) out.push(parsed);
  }

  return out;
};

const extractClientNamespaces = (content: string): Map<string, string> => {
  const map = new Map<string, string>();
  const pattern = /\{([^}]*\bt\b[^}]*)\}\s*=\s*useTranslation\(\s*([`"'])([^`"']+)\2\s*\)/g;
  let match: RegExpExecArray | null = null;

  while ((match = pattern.exec(content)) !== null) {
    const destructured = match[1] ?? '';
    const ns = match[3];

    if (!ns) {
      continue;
    }

    const aliasPattern = /\bt\s*:\s*([A-Za-z_$][\w$]*)/g;
    let aliasMatch: RegExpExecArray | null = null;
    let sawAlias = false;

    while ((aliasMatch = aliasPattern.exec(destructured)) !== null) {
      const alias = aliasMatch[1];
      if (!alias) continue;
      map.set(alias, ns);
      sawAlias = true;
    }

    if (!sawAlias && /\bt\b/.test(destructured)) {
      map.set('t', ns);
    }
  }

  if (!map.has('t')) {
    map.set('t', DEFAULT_CLIENT_NS);
  }

  return map;
};

const toClientQualifiedKey = (rawKey: string, namespace: string): string => {
  if (rawKey.includes(':')) {
    const [ns, ...rest] = rawKey.split(':');
    return `${ns}.${rest.join(':')}`;
  }

  return `${namespace}.${rawKey}`;
};

const readJson = (filePath: string): unknown => JSON.parse(fs.readFileSync(filePath, 'utf8'));

const collectClientLocaleFiles = (): LocaleFile[] => {
  const locales: LocaleFile[] = [];

  const langDirs = [path.join(CLIENT_LOCALES, TARGET_LANGUAGE)];

  for (const langDir of langDirs) {
    if (!fs.existsSync(langDir)) {
      continue;
    }

    const files = walkFiles(langDir, (f) => path.extname(f) === '.json');

    for (const filePath of files) {
      const namespace = path.basename(filePath, '.json');
      const flat = flattenObject(readJson(filePath));
      const namespaced = flat.map((k) => `${namespace}.${k}`);
      locales.push({ filePath, keys: new Set(namespaced) });
    }
  }

  return locales;
};

const collectServerLocaleFiles = (): LocaleFile[] => {
  const locales: LocaleFile[] = [];

  const files = [path.join(SERVER_LOCALES, `${TARGET_LANGUAGE}.json`)];
  for (const filePath of files) {
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const flat = flattenObject(readJson(filePath));
    locales.push({ filePath, keys: new Set(flat) });
  }

  return locales;
};

const dedupeUsages = (usages: Usage[]): Usage[] => {
  const seen = new Set<string>();
  const out: Usage[] = [];

  for (const usage of usages) {
    const id = `${usage.filePath}::${usage.key}`;
    if (seen.has(id)) continue;
    seen.add(id);
    out.push(usage);
  }

  return out;
};

const collectClientUsages = (): Usage[] => {
  const usages: Usage[] = [];

  const files = walkFiles(CLIENT_SRC, (f) => CODE_EXTENSIONS.has(path.extname(f)));
  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const content = stripComments(raw);
    const namespaces = extractClientNamespaces(content);
    const fileNamespaces = new Set<string>(namespaces.values());
    const templateVariables = extractTemplateVariables(content);

    for (const [fnName, ns] of namespaces.entries()) {
      const literals = extractCallLiterals(content, new Set([fnName]));
      const nonLiteralMarkers = extractNonLiteralCallMarkers(content, new Set([fnName]));
      const variableKeys = extractVariableCallKeys(content, new Set([fnName]), templateVariables);
      for (const key of [...literals, ...variableKeys]) {
        const qualified = toClientQualifiedKey(key, ns);
        usages.push({ filePath, key: qualified, isDynamic: qualified.includes('*') });
      }

      // If we have non-literal keys for this namespace, consider namespace keys potentially used.
      if (nonLiteralMarkers.length > 0) {
        usages.push({ filePath, key: `${ns}.*`, isDynamic: true });

        if (ns !== DEFAULT_CLIENT_NS) {
          usages.push({ filePath, key: `${DEFAULT_CLIENT_NS}.*`, isDynamic: true });
        }
      }
    }

    const i18nKeys = extractI18nKeyAttrs(content);
    for (const key of i18nKeys) {
      if (key.includes(':')) {
        const qualified = toClientQualifiedKey(key, DEFAULT_CLIENT_NS);
        usages.push({ filePath, key: qualified, isDynamic: qualified.includes('*') });
        continue;
      }

      // i18nKey without inline namespace resolves in namespaces used by this file.
      // Only fall back to common when we cannot infer any namespace.
      const candidateNamespaces = fileNamespaces.size > 0
        ? fileNamespaces
        : new Set<string>([DEFAULT_CLIENT_NS]);
      for (const ns of candidateNamespaces) {
        const qualified = toClientQualifiedKey(key, ns);
        usages.push({ filePath, key: qualified, isDynamic: qualified.includes('*') });
      }
    }
  }

  for (const key of KNOWN_CLIENT_USAGE_PATTERNS) {
    usages.push({
      filePath: '__known_client_usage__',
      key,
      isDynamic: key.includes('*'),
    });
  }

  return dedupeUsages(usages);
};

const collectServerUsages = (): Usage[] => {
  const usages: Usage[] = [];
  const files = walkFiles(SERVER_SRC, (f) => CODE_EXTENSIONS.has(path.extname(f)));

  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const content = stripComments(raw);

    // Server commonly uses translate(...); support direct t/tc/_ usages as well.
    const literals = extractCallLiterals(content, new Set(['translate', 't', 'tc', '_']));
    for (const key of literals) {
      usages.push({ filePath, key, isDynamic: key.includes('*') });
    }

    const i18nKeys = extractI18nKeyAttrs(content);
    for (const key of i18nKeys) {
      usages.push({ filePath, key, isDynamic: key.includes('*') });
    }
  }

  return dedupeUsages(usages);
};

const matches = (pattern: string, key: string): boolean => keyPatternToRegex(pattern).test(key);

const stripContextSuffix = (key: string): string => {
  const lastUnderscore = key.lastIndexOf('_');
  if (lastUnderscore === -1) {
    return key;
  }

  const suffix = key.slice(lastUnderscore + 1);
  if (!CONTEXT_SUFFIXES.has(suffix)) {
    return key;
  }

  return key.slice(0, lastUnderscore);
};

const usageMatchesLocaleKey = (usagePattern: string, localeKey: string): boolean => {
  if (matches(usagePattern, localeKey)) {
    return true;
  }

  const strippedLocaleKey = stripContextSuffix(localeKey);
  if (strippedLocaleKey !== localeKey && matches(usagePattern, strippedLocaleKey)) {
    return true;
  }

  return false;
};

const isUsedByAny = (
  key: string,
  usages: Usage[],
  useCommonFallback: boolean,
): boolean => usages.some((usage) => {
  if (usageMatchesLocaleKey(usage.key, key)) {
    return true;
  }

  if (useCommonFallback && !usage.key.startsWith('common.')) {
    const firstDotIndex = usage.key.indexOf('.');
    if (firstDotIndex > 0) {
      const keyWithoutNamespace = usage.key.slice(firstDotIndex + 1);
      const commonFallbackKey = `common.${keyWithoutNamespace}`;
      return usageMatchesLocaleKey(commonFallbackKey, key);
    }
  }

  return false;
});

const hasAnyMatchingKey = (
  usage: Usage,
  keys: Set<string>,
  useCommonFallback: boolean,
): boolean => {
  for (const key of keys) {
    if (usageMatchesLocaleKey(usage.key, key)) {
      return true;
    }
  }

  if (useCommonFallback && !usage.key.startsWith('common.')) {
    const firstDotIndex = usage.key.indexOf('.');
    if (firstDotIndex > 0) {
      const keyWithoutNamespace = usage.key.slice(firstDotIndex + 1);
      const commonFallbackKey = `common.${keyWithoutNamespace}`;

      for (const key of keys) {
        if (usageMatchesLocaleKey(commonFallbackKey, key)) {
          return true;
        }
      }
    }
  }

  return false;
};

const buildReport = (name: 'client' | 'server', localeFiles: LocaleFile[], usages: Usage[]): Report => {
  const allLocaleKeys = new Set<string>();
  for (const locale of localeFiles) {
    for (const key of locale.keys) {
      allLocaleKeys.add(key);
    }
  }

  const missingUsages = usages.filter(
    (usage) => !hasAnyMatchingKey(usage, allLocaleKeys, name === 'client'),
  );
  const missingBySourceMap = new Map<string, { static: Set<string>; dynamic: Set<string> }>();

  for (const usage of missingUsages) {
    const current = missingBySourceMap.get(usage.filePath) ?? {
      static: new Set<string>(),
      dynamic: new Set<string>(),
    };

    if (usage.isDynamic) {
      current.dynamic.add(usage.key);
    } else {
      current.static.add(usage.key);
    }

    missingBySourceMap.set(usage.filePath, current);
  }

  const missingBySource: MissingBySourceReport[] = [...missingBySourceMap.entries()]
    .map(([filePath, value]) => ({
      filePath,
      missingStatic: [...value.static],
      missingDynamic: [...value.dynamic],
    }))
    .sort((a, b) => a.filePath.localeCompare(b.filePath));

  const byLocale: LocaleReport[] = localeFiles.map((locale) => {
    const unused = [...locale.keys].filter(
      (key) => !isUsedByAny(key, usages, name === 'client'),
    );

    return {
      filePath: locale.filePath,
      unused,
    };
  });

  const missingStaticCount = missingBySource.reduce((acc, r) => acc + r.missingStatic.length, 0);
  const missingDynamicCount = missingBySource.reduce((acc, r) => acc + r.missingDynamic.length, 0);
  const unusedCount = byLocale.reduce((acc, r) => acc + r.unused.length, 0);

  return {
    name,
    byLocale,
    missingBySource,
    missingStaticCount,
    missingDynamicCount,
    unusedCount,
  };
};

const printSection = (title: string): void => {
  process.stdout.write('\n');
  process.stdout.write(`${'='.repeat(90)}\n`);
  process.stdout.write(`${title}\n`);
  process.stdout.write(`${'='.repeat(90)}\n`);
};

const printList = (label: string, values: string[]): void => {
  if (!values.length) return;
  process.stdout.write(`${label} (${values.length})\n`);
  for (const value of values) {
    process.stdout.write(`  - ${value}\n`);
  }
};

const printReport = (report: Report): void => {
  printSection(`${report.name.toUpperCase()} I18N CHECK`);

  for (const source of report.missingBySource) {
    const hasMissing = source.missingStatic.length || source.missingDynamic.length;
    if (!hasMissing) continue;

    process.stdout.write(`\nSource: ${path.relative(ROOT, source.filePath)}\n`);
    printList('Missing static', source.missingStatic);
    printList('Missing dynamic', source.missingDynamic);
  }

  for (const locale of report.byLocale) {
    const hasIssues = locale.unused.length;
    if (!hasIssues) continue;

    process.stdout.write(`\nLocale: ${path.relative(ROOT, locale.filePath)}\n`);
    printList('Unused', locale.unused);
  }

  process.stdout.write('\nSummary:\n');
  process.stdout.write(`  Missing static: ${report.missingStaticCount}\n`);
  process.stdout.write(`  Missing dynamic: ${report.missingDynamicCount}\n`);
  process.stdout.write(`  Unused: ${report.unusedCount}\n`);
};

const main = (): void => {
  const clientUsages = collectClientUsages();
  const serverUsages = collectServerUsages();

  const clientLocaleFiles = collectClientLocaleFiles();
  const serverLocaleFiles = collectServerLocaleFiles();

  const clientReport = buildReport('client', clientLocaleFiles, clientUsages);
  const serverReport = buildReport('server', serverLocaleFiles, serverUsages);

  printReport(clientReport);
  printReport(serverReport);

  const hasIssues = (
    clientReport.missingStaticCount +
    clientReport.missingDynamicCount +
    clientReport.unusedCount +
    serverReport.missingStaticCount +
    serverReport.missingDynamicCount +
    serverReport.unusedCount
  ) > 0;

  process.exit(hasIssues ? 1 : 0);
};

main();
