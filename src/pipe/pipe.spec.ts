import { pipe } from './pipe'

test('pipe', () => {
  const addOne = (n: number) => n + 1
  const square = (n: number) => n ** 2
  const decorate = (n: number) => `> ${n} <`

  expect(pipe(1, addOne, square, decorate)).toBe('> 4 <')
})
