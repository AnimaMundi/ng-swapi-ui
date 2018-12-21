/**
 * Takes a key and returns a function which takes an object and then
 * returns the property on that object matching the provided key.
 * @param key The key of the property to return.
 */
export const prop = <T, K extends keyof T>(key: K) => (obj: T) => obj[key];

/**
 * Indicates whether or not the provided object is null or undefined.
 */
export const isNil = <T>(obj: T | undefined): obj is undefined =>
  obj === null || obj === undefined;
