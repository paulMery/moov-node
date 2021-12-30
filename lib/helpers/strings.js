export const isString = (str) => typeof str === "string";

export const isEmptyString = (str) =>
  str === undefined || str === null || str.length === 0;
