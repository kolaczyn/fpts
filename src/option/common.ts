import { Option } from './option'

export type OptionCommon<T> = {
  bind: <U>(fn: (t: T) => Option<U>) => Option<U>
  map: <U>(fn: (t: T) => U) => Option<U>
  unwrapOr: (fallback: T) => T
}
