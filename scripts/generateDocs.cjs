const jsdoc2md = require("jsdoc-to-markdown");
const fs = require("fs");
const path = require("path");

const FILES = { Moov: "./lib/moov.js", Accounts: "./lib/accounts.js" };
const TEMPLATE_PATH = path.resolve("./docs/templates/template.hbs");
const PARTIALS_PATH = path.resolve("./docs/templates/partials");

// Check for a custom template
let template = null;
if (fs.existsSync(TEMPLATE_PATH)) {
  template = fs.readFileSync(TEMPLATE_PATH, "utf-8");
  console.log(`Rendering with custom template:\n`, TEMPLATE_PATH);
}

// Check for custom partials
let partials = [];
const filesInPartialsDir = fs.readdirSync(PARTIALS_PATH);
for (let partialFile of filesInPartialsDir) {
  if (path.extname(partialFile).toLowerCase() === ".hbs") {
    partials.push(path.join(PARTIALS_PATH, partialFile));
  }
}
if (partials) {
  console.log(`Rendering with custom partials:`);
  for (let partial of partials) {
    console.log(`- ${partial}`);
  }
}

for (let topic of Object.keys(FILES)) {
  // Get template data
  const templateData = jsdoc2md.getTemplateDataSync({
    files: FILES[topic],
    configure: "./jsdoc.json",
  });
  if (topic === "Moov") {
    console.log(templateData);
  }

  // Clean up the data for our docs
  for (let item of templateData) {
    if ("name" in item) {
      item.name = item.name.replace("exports.", "");
    }
  }

  // Generate file
  const renderOptions = {
    data: templateData,
  };
  if (template) {
    renderOptions.template = template;
  }
  if (partials.length) {
    renderOptions.partial = partials;
  }
  const output = jsdoc2md.renderSync(renderOptions);
  fs.writeFileSync(path.join("./docs/output", `${topic}.md`), output);
}
