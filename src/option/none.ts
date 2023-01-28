import { Option } from './option'

export type None<T> = {
  none: 'none'
  bind: <U>(fn: (t: T) => Option<U>) => Option<U>
  map: <U>(fn: (t: T) => U) => Option<U>
  unwrapOr: (fallback: T) => T
}

export const none = <T>(): None<T> => ({
  none: 'none',
  bind: _fn => none(),
  map: _fn => none(),
  unwrapOr: fallback => fallback,
})
