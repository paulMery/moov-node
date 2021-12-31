export const loggingGotOptions = {
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
