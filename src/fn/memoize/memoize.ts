import { isSome, Maybe, objGet } from '../..'

type Fn = (n: number) => number

export const memoize = (fn: Fn): Fn => {
  const memo: Record<number, number> = {}
  const cachedFn = (num: number) => {
    const fromCache = objGet(memo, num) as Maybe<number>
    if (isSome(fromCache)) {
      return fromCache.some
    }
    const value = fn(num)
    memo[num] = value
    return value
  }
  return cachedFn
}
