/**
 * Demonstrates how to access the Moov request-response pipeline by adding
 * logging to requests and responses. See the [Got
 * docs](https://github.com/sindresorhus/got) for more information.
 *
 * @example
 * const moov = new Moov(credentials, gotOptionsForLogging);
 * await moov.ping(); // <-- Logs request and response to console
 */
export const gotOptionsForLogging = {
  hooks: {
    beforeRequest: [
      (options) => {
        console.log("==", options.method, options.url.toString(), "==");
      },
    ],
    afterResponse: [
      (res) => {
        console.log(res.statusCode, res.statusMessage || "");
        if (
          "content-type" in res.headers &&
          res.headers["content-type"].startsWith("application/json")
        ) {
          console.log(JSON.parse(res.body));
        } else {
          console.log(res.body);
        }
        if (res.statusCode !== 200) {
          console.log(res.headers);
        }
        return res;
      },
    ],
  },
};
