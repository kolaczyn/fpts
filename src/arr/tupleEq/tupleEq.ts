import { Tuple, zip } from '../..'

export const tupleEq = <T extends string | number | boolean, N extends number>(
  arr1: Tuple<T, N>,
  arr2: Tuple<T, N>
) => zip(arr1, arr2).every(([a, b]) => a === b)
