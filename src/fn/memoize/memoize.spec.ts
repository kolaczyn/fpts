import { memoize } from './memoize'

describe('memoize', () => {
  it('doesnt call the function for already memoized argument', () => {
    const fn = jest.fn(x => x * 2)

    const memoizedFn = memoize(fn)

    expect(fn).not.toHaveBeenCalled()

    expect(memoizedFn(4)).toEqual(8)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenLastCalledWith(4)

    expect(memoizedFn(4)).toEqual(8)
    expect(fn).toHaveBeenCalledTimes(1)

    expect(memoizedFn(100)).toEqual(200)
    expect(fn).toHaveBeenCalledTimes(2)
    expect(fn).toHaveBeenLastCalledWith(100)
  })
})
