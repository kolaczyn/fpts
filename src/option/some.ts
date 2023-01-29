import { isSome } from './option'
import { none } from './none'
import { OptionCommon } from './common'

export type Some<T> = {
  some: T
} & OptionCommon<T>

export const some = <T>(payload: T): Some<T> => ({
  some: payload,
  map: fn => some(fn(payload)),
  bind: fn => {
    const result = fn(payload)
    return isSome(result) ? result : none()
  },
  unwrapOr: _fallback => payload,
  mapAsync: async fn => some(await fn(payload)),
})
