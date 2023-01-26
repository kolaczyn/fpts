export const mapObject = <K extends string, V1, V2>(
  obj: Record<K, V1>,
  mapper: (v1: V1) => V2
) =>
  Object.entries(obj).reduce(
    (acc, [k, v]) => ({
      ...acc,
      // @ts-expect-error: TypeScript couldn't figure out that `v` is of type `V1`
      [k]: mapper(v),
    }),
    {}
  )
