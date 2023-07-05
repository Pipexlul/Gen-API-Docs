import * as fs from "fs";
import * as path from "path";

import express from "express";
import swaggerUI, { JsonObject, SwaggerUiOptions } from "swagger-ui-express";

let swaggerFile: string;
let swaggerJson: JsonObject;
const pathToJson = path.resolve(__dirname, "../../data/api.json");

if (fs.existsSync(pathToJson)) {
  swaggerFile = fs.readFileSync(pathToJson, "utf8");
} else {
  console.error("api.json not found.");
  process.exit(1);
}

try {
  swaggerJson = JSON.parse(swaggerFile);
} catch (err) {
  console.error("api.json is not valid JSON.");
  process.exit(1);
}

const options: SwaggerUiOptions = {
  swaggerOptions: {
    docExpansion: "full",
  },
};

const router = express.Router();

router.use(swaggerUI.serve);
router.get("/", swaggerUI.setup(swaggerJson, options));

export default router;
