import { isEmptyString } from "./strings";

const orThrow = {
  or: (msg) => {
    throw new TypeError(msg);
  },
};

const orNothing = {
  or: () => {},
};

export function requiresString(str) {
  if (isEmptyString(str)) {
    return orThrow;
  } else {
    return orNothing;
  }
}
