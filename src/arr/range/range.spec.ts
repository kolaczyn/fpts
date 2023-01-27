import { range, rangeFromTo } from './range'

test('range', () => {
  expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('rangeFromTo', () => {
  expect(rangeFromTo(4, 8)).toEqual([4, 5, 6, 7])
  expect(rangeFromTo(9, 3)).toEqual([])
  expect(rangeFromTo(8, 9)).toEqual([8])
  expect(rangeFromTo(8, 8)).toEqual([])
})
