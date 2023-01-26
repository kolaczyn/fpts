import { isSome, Maybe } from './maybe'
import { none } from './none'

export type Some<T> = {
  some: T
  bind: <U>(fn: (t: T) => Maybe<U>) => Maybe<U>
  map: <U>(fn: (t: T) => U) => Maybe<U>
}

export const some = <T>(payload: T): Some<T> => ({
  some: payload,
  map: fn => some(fn(payload)),
  bind: fn => {
    const result = fn(payload)
    return isSome(result) ? result : none()
  },
})
