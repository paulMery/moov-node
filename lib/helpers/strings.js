export function isString(str) {
  return typeof str === "string";
}

export function isEmptyString(str) {
  return str === undefined || str === null || str.length === 0;
}

export function isUrlString(str) {
  if (isEmptyString(str)) {
    return false;
  } else {
    try {
      new URL(str);
    } catch {
      return false;
    }
    return true;
  }
}
