import fs from 'fs';
import path from 'path';

const coreSrcPath = path.join(__dirname, '../core/src');

function createIndexFile(dirPath: string) {
  const files = fs.readdirSync(dirPath);
  const fileExports = files
    .filter((file) => file !== 'index.ts' && (file.endsWith('.ts') || file.endsWith('.d.ts')))
    .map((file) => `export * from './${file.replace(/(\.d)?\.ts$/, '')}';`)
    .join('\n');

  const subDirs = files.filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());
  const subDirExports = subDirs
    .map((subDir) => `export * from './${subDir}/index';`)
    .join('\n');

  const exports = `${fileExports}\n${subDirExports}`;

  fs.writeFileSync(path.join(dirPath, 'index.ts'), exports, 'utf8');

  subDirs.forEach((subDir) => createIndexFile(path.join(dirPath, subDir)));
}

createIndexFile(coreSrcPath);

console.log('Index files generated successfully.');
