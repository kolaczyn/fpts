import { tupleEq } from './tupleEq'

describe('tupleEq', () => {
  test('equal', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    expect(tupleEq(arr1, arr2)).toBe(true)
  })

  test('not equal', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [3, 2, 1]
    expect(tupleEq(arr1, arr2)).toBe(false)
  })
})
