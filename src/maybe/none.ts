import { Maybe } from './maybe'

export type None<T> = {
  none: 'none'
  bind: <U>(fn: (t: T) => Maybe<U>) => Maybe<U>
  map: <U>(fn: (t: T) => U) => Maybe<U>
}

export const none = <T>(): None<T> => ({
  none: 'none',
  bind: _fn => none(),
  map: _fn => none(),
})
