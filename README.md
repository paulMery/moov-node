# Node SDK for Moov API and Dashboard

TBD

## Installation

```shell
npm install @moovio/node
```

## Usage

Initialize the Moov client with your account ID and API key credentials. Get
these from the Moov Dashboard.

```javascript
import { Moov } from "@moovio/node";

const moov = new Moov({
  accountID: "...",
  publicKey: "...",
  secretKey: "...",
  domain: "...",
});
await moov.ping();
```

Generate OAuth tokens for Moov.js and Moov Drops using `Moov.generateToken()`.

```javascript
import { Moov, SCOPES } from "@moovio/node";

const moov = new Moov({
  accountID: "...",
  publicKey: "...",
  secretKey: "...",
  domain: "...",
});
const token = await moov.generateToken([SCOPES.ACCOUNTS_CREATE]);
```

See the [`/examples`]() folder for more details.

## Documentation

TBD

## Troubleshooting and support

TBD

## Changelog

See [CHANGELOG.md](moovfinancial/moov-node/blob/main/CHANGELOG.md) for details.

## License

Apache 2.0. See [LICENSE](moovfinancial/moov-node/blob/main/LICENSE) for details.

## Contributing

Yes, please! Be sure to start a [discussion](moovfinancial/moov-node/discussions) or create an [issue](moovfinancial/moov-node/issues) before submitting a pull request.
