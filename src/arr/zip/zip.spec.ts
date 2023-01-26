import { zip } from './zip'

describe('zip', () => {
  test('same length', () => {
    const arr1 = [1, 2, 3]
    const arr2 = ['one', 'two', 'three']

    expect(zip(arr1, arr2)).toMatchObject([
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
    ])
  })
})
