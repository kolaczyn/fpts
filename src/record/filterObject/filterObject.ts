export const filterObject = <K extends string, V>(
  obj: Record<K, V>,
  predicate: (v: V) => boolean
): Record<string, V> =>
  Object.entries(obj)
    // @ts-expect-error: TypeScript doesn't know `value` is of type `V`
    .filter(([_key, value]) => predicate(value))
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {} as Record<K, V>
    )
