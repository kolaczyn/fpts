import { filterObject } from './filterObject'

test('filterObject', () => {
  const obj = {
    one: 1,
    two: 2,
    three: 3,
    ten: 10,
  }

  expect(filterObject(obj, x => x % 2 === 0)).toMatchObject({
    two: 2,
    ten: 10,
  })
})
