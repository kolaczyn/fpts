import { objMap } from './objMap'

test('objMap', () => {
  const obj = {
    one: 1,
    two: 2,
    three: 3,
  }
  expect(objMap(obj, n => n ** 2)).toMatchObject({
    one: 1,
    two: 4,
    three: 9,
  })
})
