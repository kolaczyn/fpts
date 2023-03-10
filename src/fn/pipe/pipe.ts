type Pipe = <A, B, C, D, E, F, G, H, Z>(
  a: A,
  f0: (a: A) => B,
  f1?: (b: B) => C,
  f2?: (c: C) => D,
  f3?: (d: D) => E,
  f4?: (e: E) => F,
  f5?: (e: F) => G,
  f6?: (e: G) => H,
  f7?: (f: H) => Z
) => Z

export const pipe: Pipe = (arg0, ...functions) =>
  // @ts-expect-error: we know better than TypeScript
  functions.reduce((acc, func) => func(acc), arg0)
