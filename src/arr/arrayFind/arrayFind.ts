import { some, none, Maybe } from '../..'

// copied from Array methods type definition
// didn't know a better way :/
type FindPredicate<T> = (value: T, index: number, obj: T[]) => unknown

export const arrayFind = <T>(
  arr: T[],
  predicate: FindPredicate<T>
): Maybe<T> => {
  const element = arr.find(predicate)
  return element === undefined ? none() : some(element)
}
