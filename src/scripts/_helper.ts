import * as fs from "fs";
import * as path from "path";

const filesToModifyMJS = ["convertYaml.js"];

filesToModifyMJS.forEach((file) => {
  const pathToLocalFile = path.resolve(__dirname, file);

  fs.renameSync(pathToLocalFile, pathToLocalFile.replace(".js", ".mjs"));
});
