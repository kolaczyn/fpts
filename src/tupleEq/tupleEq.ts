import { Tuple } from '../types/tuple'
import { zip } from '../zip/zip'

export const tupleEq = <T extends string | number | boolean, N extends number>(
  arr1: Tuple<T, N>,
  arr2: Tuple<T, N>
) => zip(arr1, arr2).every(([a, b]) => a === b)
