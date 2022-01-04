import { Moov } from "../lib/moov.js";
import { gotOptionsForLogging } from "./gotOptionsForLogging.js";
import { loadCredentials } from "./loadCredentials.js";

/**
 * Demonstrates how to initialize the Moov client and ping Moov servers.
 */
async function run() {
  // Load credentials and initialize the Moov client
  const credentials = loadCredentials("./secrets/credentials.json");
  const moov = new Moov(credentials);

  // Ping Moov servers
  await moov.ping();
}

run();
