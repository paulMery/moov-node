const fs = require("fs");
const path = require("path");

const handlebars = require("handlebars");
const _ = require("lodash");

const JSDOC_DATA_PATH = "./docs/build/docs.json";
const API_TEMPLATE_PATH = "./docs/templates/api.hbs";
const TAG_TEMPLATE_PATH = "./docs/templates/tags";
const OUTPUT_PATH = "./docs/output";

function run() {
  const data = parseData();
  writeDataToTemplates(data);
}

/**
 * Transforms JSDoc data (an array of JSDOC identifiers) into the structure
 * expected by our Handlebars templates:
 *
 * {
 *   [tag: string]: {
 *     classes: [
 *       {
 *         name: string,
 *         members: identifier[],
 *         functions: identifier[],
 *       }
 *     ],
 *     functions: identifier[],
 *     enums: identifier[],
 *     types: identifier[]
 *   }
 * }
 */
function parseData() {
  // Open JSDoc data
  let jsdocJson, jsdocData;
  try {
    jsdocJson = fs.readFileSync(JSDOC_DATA_PATH, "utf-8");
  } catch (err) {
    console.error(
      `Unable to read JSDoc data at ${JSDOC_DATA_PATH}. Did you run 'npm run jsdoc'?\n`,
      err.message
    );
    process.exit(1);
  }
  try {
    jsdocData = JSON.parse(jsdocJson);
  } catch (err) {
    console.error("Unable to parse JSDoc data.\n", err.message);
    process.exit(1);
  }

  // Filter out identifiers we don't need
  const jsdocDataFiltered = jsdocData
    .filter((x) => x.comment)
    .filter((x) => x.access !== "private")
    .filter(
      (x) =>
        (x.kind === "constant" && x.scope === "global") ||
        x.kind === "member" ||
        x.kind === "typedef" ||
        x.kind === "class" ||
        x.kind === "function"
    );

  // Group identifiers by tag
  const jsdocDataByTag = _.groupBy(jsdocDataFiltered, (x) =>
    x.tags?.length ? x.tags[0].text : "untagged"
  );

  // Organize each tag's identifiers into properties our doc templates expect
  const docData = {};
  for (let tag of Object.keys(jsdocDataByTag)) {
    const idents = jsdocDataByTag[tag];
    docData[tag] = {};

    // Classes and their members
    docData[tag].classes = [];
    const classes = _.remove(idents, (x) => x.kind === "class");
    for (let cls of classes) {
      // Skip duplicate classes (JSDoc bug?)
      if (docData[tag].classes.filter((x) => x.name === cls.name).length) {
        continue;
      }

      // Get members and functions
      const members = _.remove(
        idents,
        (x) => x.kind === "member" && x.memberof === cls.name
      );
      const functions = _.remove(
        idents,
        (x) => x.kind === "function" && x.memberof === cls.name
      );

      // Record the class name, its members, and its functions
      docData[tag].classes.push({
        name: cls.name,
        members,
        functions,
      });
    }

    // Functions
    docData[tag].functions = _.remove(idents, (x) => x.kind === "function");

    // Enumerations and their members
    docData[tag].enums = [];
    const enums = _.remove(idents, (x) => x.kind === "constant" && x.isEnum);
    for (let e of enums) {
      // Get members
      const members = _.remove(
        idents,
        (x) => x.kind === "member" && x.memberof === e.name
      );

      docData[tag].enums.push({
        name: e.name,
        members,
      });
    }

    // Types and their properties
    docData[tag].types = _.remove(idents, (x) => x.kind === "typedef");
  }

  return docData;
}

/**
 * Writes transformed doc data first using the API template and then using the
 * tag's template if it exists.
 */
function writeDataToTemplates(data) {
  let apiTemplate;
  try {
    apiTemplate = fs.readFileSync(API_TEMPLATE_PATH, "utf-8");
  } catch (err) {
    console.error(
      `Unable to load the API template at ${API_TEMPLATE_PATH}. Did it move?`,
      err.message
    );
    process.exit(1);
  }
  const apiTemplateFn = handlebars.compile(apiTemplate);

  for (let tag of Object.keys(data)) {
    // Compile using the API template
    const apiDocs = {
      apiDocs: apiTemplateFn(data[tag]),
    };

    // Look for a template for this specific tag
    let tagTemplate = "{{apiDocs}}";
    try {
      tagTemplate = fs.readFileSync(
        path.join(TAG_TEMPLATE_PATH, `${tag}.bhs`),
        "utf-8"
      );
    } catch {
      // Intentional no-op
    }

    const tagTemplateFn = handlebars.compile(tagTemplate);

    // Write the final file
    const outputPath = path.join(OUTPUT_PATH, `${tag}.md`);
    try {
      fs.writeFileSync(outputPath, tagTemplateFn(apiDocs));
    } catch (err) {
      console.error(`Unable to write docs to ${outputPath}.`, err);
    }
  }
}

run();
