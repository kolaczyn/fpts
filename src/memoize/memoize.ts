import { isSome } from '../maybe/maybe'
import { recordGet } from '../recordGet/recordGet'

export const memoize = (fn: (n: number) => number): ((n: number) => number) => {
  const memo: Record<number, number> = {}
  return (num: number) => {
    const fromCache = recordGet(memo, num)
    if (isSome(fromCache)) {
      return fromCache.some
    }
    const value = fn(num)
    memo[num] = value
    return value
  }
}
