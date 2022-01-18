const jsdoc2md = require("jsdoc-to-markdown");
const fs = require("fs");
const path = require("path");

// Get template data
const templateData = jsdoc2md.getTemplateDataSync({
  files: "./lib/**.js",
  configure: "./jsdoc.json",
});

console.log(templateData);

// Group data by @category tag
const categories = {};
for (let jsDocEntry of templateData) {
  if ("category" in jsDocEntry) {
    if (!("category" in categories)) {
      categories[jsDocEntry.category] = [];
    }
    categories[jsDocEntry.category].push(jsDocEntry);
  } else {
    const location = jsDocEntry.meta
      ? `${path.join(jsDocEntry.meta.path, jsDocEntry.meta.filename)}:${
          jsDocEntry.meta.lineno
        }`
      : "";
    console.error(`Missing @category: ${jsDocEntry.longname}\n${location}`);
  }
}

// Generate file for each category
for (let category of Object.keys(categories)) {
  const template = `{{>docs}}`;
  const output = jsdoc2md.renderSync({
    data: categories[category],
    template,
  });
  fs.writeFileSync(path.join("./docs/output", `${category}.md`), output);
}
