import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function loadCredentials() {
  const json = fs.readFileSync(
    path.join(__dirname, "credentials.json"),
    "utf-8"
  );
  return JSON.parse(json);
}
