/**
 * Post-process SVGR output: replace static clipPath ids with React.useId()
 * so multiple instances of the same icon don't produce duplicate IDs in the DOM.
 * Run after: npm run icons
 */

const fs = require("fs");
const path = require("path");

const ICONS_DIR = path.join(__dirname, "../src/components/icons");

const files = fs.readdirSync(ICONS_DIR).filter((f) => f.endsWith(".js"));

for (const file of files) {
  const filePath = path.join(ICONS_DIR, file);
  let code = fs.readFileSync(filePath, "utf8");

  // Match SVGR default: id="logo1_svg__a" or similar (word chars + _)
  const idMatch = code.match(/id="([a-zA-Z0-9_]+)"/);
  if (!idMatch) continue;

  const oldId = idMatch[1];
  const escapedId = oldId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Already processed (has useId)
  if (code.includes("React.useId()")) continue;

  // Arrow component -> function with useId
  code = code.replace(
    /const (Svg\w+) = \(props\) => \(\s*\n/,
    "function $1(props) {\n  const id = React.useId().replace(/:/g, \"\");\n  return (\n"
  );
  code = code.replace(/\n\);(\s*)\n(\s*)export default/, "\n  );\n}\n$1\n$2export default");

  // Replace static id with {id}
  code = code.replace(new RegExp(`id="${escapedId}"`, "g"), "id={id}");

  // Replace clipPath="url(#...)" with template literal (output literal ${id})
  code = code.replace(
    new RegExp(`clipPath="url\\(#${escapedId}\\)"`, "g"),
    'clipPath={`url(#${id})`}'
  );

  fs.writeFileSync(filePath, code, "utf8");
  console.log("Fixed IDs in:", file);
}

console.log("Done. SVG components now use unique ids per instance.");
