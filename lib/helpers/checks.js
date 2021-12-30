import { isEmptyString, isUrlString } from "./strings";

const orThrow = {
  or: (msg) => {
    throw new TypeError(msg);
  },
};

const orNothing = {
  or: () => {},
};

export function check(any) {
  return !(any === undefined || any === null);
}

export function checkString(str) {
  return !isEmptyString(str) ? orNothing : orThrow;
}

export function checkUrl(url) {
  return isUrlString(url) ? orNothing : orThrow;
}

export function checkArray(arr) {
  return check(arr) && arr.constructor === Array ? orNothing : orThrow;
}

export function checkArrayLength(arr) {
  return checkArray(arr) && arr.length > 0 ? orNothing : orThrow;
}
