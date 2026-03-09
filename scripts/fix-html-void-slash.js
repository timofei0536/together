/**
 * Post-process static HTML export: remove trailing slashes on void elements
 * so validators (e.g. Nu Html Checker) don't warn.
 * Run after: next build (with output: 'export')
 */

const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "../out");

const VOID_TAGS =
  "meta|link|img|br|hr|input|col|embed|source|track|wbr|area|base|param";
const VOID_REGEX = new RegExp(
  `<(${VOID_TAGS})(\\s[^>]*?)?\\s*/>`,
  "g"
);

function processFile(filePath) {
  let html = fs.readFileSync(filePath, "utf8");
  const next = html.replace(VOID_REGEX, "<$1$2>");
  if (next !== html) {
    fs.writeFileSync(filePath, next, "utf8");
    return true;
  }
  return false;
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const htmlFiles = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) htmlFiles.push(...walkDir(full));
    else if (e.isFile() && e.name.endsWith(".html")) htmlFiles.push(full);
  }
  return htmlFiles;
}

const files = walkDir(OUT_DIR);
let fixed = 0;
for (const f of files) {
  if (processFile(f)) fixed++;
}
console.log(
  `[fix-html-void-slash] Processed ${files.length} HTML file(s), updated ${fixed}.`
);
