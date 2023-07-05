import * as fs from "fs";
import * as path from "path";

import { version } from "../lib/version";

type TokenToReplace = [string, string];

const tokensToReplace: TokenToReplace[] = [["version", version]];

const readmeFile = path.join(process.cwd(), "README.md");
const baseReadme = path.join(process.cwd(), "dev", "baseREADME.md");

let readmeStr: string = fs.readFileSync(baseReadme, { encoding: "utf8" });

for (const tokenToReplace of tokensToReplace) {
  readmeStr = readmeStr.replace(`{${tokenToReplace[0]}}`, tokenToReplace[1]);
}

fs.writeFileSync(readmeFile, readmeStr);
