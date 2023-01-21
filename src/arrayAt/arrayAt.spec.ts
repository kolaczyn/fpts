import { none, some } from '..'
import { arrayAt } from './arrayAt'

test('arrayAt', () => {
  expect(arrayAt([9, 3, 6, 7], -1)).toEqual(some(7))

  expect(arrayAt([3, 5, 6, 122], 10)).toEqual(none)
})
