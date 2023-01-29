import { Option } from './option'

export type OptionCommon<T> = {
  bind: <U>(fn: (t: T) => Option<U>) => Option<U>
  map: <U>(fn: (t: T) => U) => Option<U>
  unwrapOr: (fallback: T) => T
  // Awaited, because in JavaScript, awaiting goes "all the way down". In other words, if `U` is a promise, it will also be awaited
  mapAsync: <U>(fn: (t: T) => Promise<U>) => Promise<Option<Awaited<U>>>
}
