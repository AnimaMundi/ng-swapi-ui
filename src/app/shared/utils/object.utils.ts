/**
 * Takes a key and returns a function which takes an object and then
 * returns the property on that object matching the provided key.
 * @param key The key of the property to return.
 */
export const prop = <T, K extends keyof T>(key: K) => (obj: T) =>
  !isNil(obj) && !isNil(obj[key]) ? obj[key] : undefined;

/**
 * Indicates whether or not the provided object is null or undefined.
 * @param obj The object to check.
 */
export const isNil = <T>(obj: T | undefined): obj is undefined =>
  obj === null || obj === undefined;

/**
 * Indicates whether or not the provided object is a valid array.
 * @param arr The object/array to check.
 */
export const isArray = <T>(arr: T[] | undefined): arr is T[] =>
  !isNil(arr) && !isNil(arr.length);
