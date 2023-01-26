import { isSome, Maybe } from '../maybe/maybe'
import { recordGet } from '../recordGet/recordGet'

type Fn = (n: number) => number

export const memoize = (fn: Fn): Fn => {
  const memo: Record<number, number> = {}
  const cachedFn = (num: number) => {
    const fromCache = recordGet(memo, num) as Maybe<number>
    if (isSome(fromCache)) {
      return fromCache.some
    }
    const value = fn(num)
    memo[num] = value
    return value
  }
  return cachedFn
}
