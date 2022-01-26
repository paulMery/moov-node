import { Moov } from "../lib/moov.js";
import { gotOptionsForLogging } from "./gotOptionsForLogging.js";
import { loadCredentials } from "./loadCredentials.js";

/**
 * Demonstrates how to create and update a connected account.
 */
async function run() {
  // Load credentials and initialize the Moov client
  const credentials = loadCredentials("./secrets/credentials.json");
  const moov = new Moov(credentials, {
    ...gotOptionsForLogging,
    prefixUrl: "https://api.moov-staging.io",
  });

  // Create a new account
  const account = await moov.accounts.create({
    accountType: "business",
    displayName: "Test Business (from Node SDK)",
    profile: {
      business: {
        businessType: "llc",
        legalBusinessName: "TestCo LLC",
        website: "https://testco.com",
      },
    },
  });

  // Update - requires a complete account object
  account.profile.business.phone = { number: "555-555-5555" };
  const updatedAccount = await moov.accounts.update(account);

  // Patch - does not require a complete account object
  const patchedAccount = await moov.accounts.patch({
    accountID: account.accountID,
    profile: {
      business: {
        website: "https://testco.xyz",
      },
    },
  });
}

run();
