import { Moov } from "../../lib/moov.js";
import { loggingGotOptions } from "../../lib/helpers/loggingGotOptions.js";
import { loadCredentials } from "./loadCredentials.js";

async function run() {
  const credentials = loadCredentials();

  const moov = new Moov(credentials, loggingGotOptions);

  try {
    const accounts = await moov.accounts.list();
    console.log(accounts);
  } catch (err) {
    console.error("failed: ", err.message);
  }
}

run();
