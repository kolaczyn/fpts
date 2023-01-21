import { pipe } from './pipe'

const addOne = (n: number) => n + 1
const square = (n: number) => n ** 2
const decorate = (n: number) => `> ${n} <`

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
})
