import { Moov } from "../../lib/moov.js";
import { loggingGotOptions } from "../../lib/helpers/loggingGotOptions.js";
import { loadCredentials } from "./loadCredentials.js";

async function run() {
  const credentials = loadCredentials();

  const moov = new Moov(credentials, loggingGotOptions);

  try {
    const account = await moov.accounts.get(
      "d3216629-4317-424a-bac5-a2fae0c0c24e"
    );
  } catch (err) {
    console.error("failed: ", err.message);
  }
}

run();
