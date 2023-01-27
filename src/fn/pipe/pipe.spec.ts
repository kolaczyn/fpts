import { pipe } from './pipe'

const addOne = (n: number) => n + 1
const square = (n: number) => n ** 2
const decorate = (n: number) => `> ${n} <`
const removeSpace = (str: string) => str.replaceAll(' ', '')

describe('pipe', () => {
  test('1 function', () => {
    expect(pipe(3, addOne)).toBe(4)
  })

  test('2 functions', () => {
    expect(pipe(3, addOne, square)).toBe(16)
  })

  test('3 functions', () => {
    expect(pipe(3, addOne, square, decorate)).toBe('> 16 <')
  })

  test('4 functions', () => {
    expect(pipe(3, addOne, square, decorate, removeSpace)).toBe('>16<')
  })

  test('TypeScript error', () => {
    expect(
      pipe(
        1,
        n => n + 1,
        // @ts-expect-error: detect that `number` doesn't have `length` property
        n => n.length
      )
    ).toBe(undefined)
  })
})
