/**
 * A generic function to safely access properties of an object that might be null.
 *
 * @param obj - The object from which to extract the property. It can be null.
 * @param key - The key of the property to extract.
 * @returns The value of the property if the object is not null, otherwise undefined.
 */
export function getProperty<T, K extends keyof T>(obj: T | null, key: K): T[K] | undefined {
  return obj ? obj[key] : undefined;
}