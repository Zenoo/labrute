const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const { execSync } = require('child_process');

const root = process.cwd();
const files = execSync("rg --files src -g '*.tsx'", { encoding: 'utf8' })
  .split(/\r?\n/)
  .filter(Boolean);

let updated = 0;
for (const rel of files) {
  const abs = path.join(root, rel);
  const text = fs.readFileSync(abs, 'utf8');
  if (!text.includes('<Page')) continue;

  const sf = ts.createSourceFile(rel, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const removals = [];

  const visit = (node) => {
    if ((ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node))
      && node.tagName.getText(sf) === 'Page') {
      for (const prop of node.attributes.properties) {
        if (ts.isJsxAttribute(prop)) {
          const name = prop.name.getText(sf);
          if (name === 'title' || name === 'description') {
            removals.push([prop.getFullStart(), prop.getEnd()]);
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  };

  visit(sf);
  if (!removals.length) continue;

  let out = text;
  removals.sort((a, b) => b[0] - a[0]);
  for (const [start, end] of removals) {
    out = out.slice(0, start) + out.slice(end);
  }

  if (out !== text) {
    fs.writeFileSync(abs, out, 'utf8');
    updated += 1;
  }
}

console.log(`Updated ${updated} files`);
