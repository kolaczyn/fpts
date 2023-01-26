import { objFilter } from './objFilter'

test('objFilter', () => {
  const obj = {
    one: 1,
    two: 2,
    three: 3,
    ten: 10,
  }

  expect(objFilter(obj, x => x % 2 === 0)).toMatchObject({
    two: 2,
    ten: 10,
  })
})
