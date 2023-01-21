import { some, none, Maybe } from '..'

export const arrayAt = <T>(arr: T[], index: number): Maybe<T> => {
  const element = arr.at(index)
  if (element === undefined) {
    return none
  }
  return element === undefined ? none : some(element)
}
