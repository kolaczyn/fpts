import { memoize } from './memoize'

test('memoize', () => {
  const fn = jest.fn(x => x * 2)

  const memoizedFn = memoize(fn)

  expect(memoizedFn).not.toHaveBeenCalled()

  expect(memoizedFn(4)).toEqual(8)
  expect(memoizedFn).toHaveBeenCalledTimes(1)
  expect(memoizedFn).toHaveBeenLastCalledWith(4)

  expect(memoizedFn(4)).toEqual(8)
  expect(memoizedFn).toHaveBeenCalledTimes(1)

  expect(memoizedFn(100)).toEqual(200)
  expect(memoizedFn).toHaveBeenCalledTimes(2)
  expect(memoizedFn).toHaveBeenLastCalledWith(100)
})
