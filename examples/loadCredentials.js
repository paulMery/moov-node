import fs from "fs";

/**
 * Loads credentials from a JSON file. Use this to initialize the Moov client
 * with credentials stored in a secure file location.
 *
 * Never commit Moov API key credentials to a source control repository. Treat
 * them like passwords.
 *
 * @example
 * const credentials = loadCredentials("./secrets/moov-credentials.json");
 * const moov = new Moov(credentials);
 * moov.ping();
 */
export function loadCredentials(filePath) {
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json);
}
