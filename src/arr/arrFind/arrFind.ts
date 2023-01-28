import { some, none, Option } from '../..'

// copied from Array methods type definition
// didn't know a better way :/
type FindPredicate<T> = (value: T, index: number, obj: T[]) => unknown

export const arrFind = <T>(
  arr: T[],
  predicate: FindPredicate<T>
): Option<T> => {
  const element = arr.find(predicate)
  return element === undefined ? none<T>() : some<T>(element)
}
