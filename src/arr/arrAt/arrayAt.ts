import { Option, none, some } from '../..'

export const arrAt = <T>(arr: T[], index: number): Option<T> => {
  const element = arr.at(index)
  return element === undefined ? none<T>() : some<T>(element)
}
