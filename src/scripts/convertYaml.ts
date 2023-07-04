import * as fs from "fs";
import * as path from "path";
import readJsYaml from "read-js-yaml";

const pathToYaml = path.relative(process.cwd(), "data/apiContract.yml");

(async () => {
  try {
    const result = await readJsYaml(pathToYaml);

    fs.writeFileSync("data/api.json", JSON.stringify(result.body, null, 2));

    console.log("apiContract.yml successfully converted to api.json");
  } catch (err) {
    console.error(err);
  }
})();
