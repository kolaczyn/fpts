import { Tuple } from '../types/tuple'

export const zip = <A, B, N extends number>(
  arr1: Tuple<A, N>,
  arr2: Tuple<B, N>
): Tuple<[A, B], N>[] =>
  // @ts-expect-error: TS not smart enough
  arr1.map((a, idx) => [a, arr2[idx]])
