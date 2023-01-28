import { isSome, Option } from './option'
import { none } from './none'

export type Some<T> = {
  some: T
  bind: <U>(fn: (t: T) => Option<U>) => Option<U>
  map: <U>(fn: (t: T) => U) => Option<U>
  unwrapOr: (fallback: T) => T
}

export const some = <T>(payload: T): Some<T> => ({
  some: payload,
  map: fn => some(fn(payload)),
  bind: fn => {
    const result = fn(payload)
    return isSome(result) ? result : none()
  },
  unwrapOr: _fallback => payload,
})
