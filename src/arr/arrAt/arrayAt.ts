import { Maybe, none, some } from '../..'

export const arrAt = <T>(arr: T[], index: number): Maybe<T> => {
  const element = arr.at(index)
  return element === undefined ? none() : some(element)
}
