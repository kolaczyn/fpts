export const get =
  <TObj extends object, TKey extends keyof TObj>(key: TKey) =>
  (obj: TObj) =>
    obj[key]
