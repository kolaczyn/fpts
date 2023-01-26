import { noneObj } from '../testing/none-testing'
import { someObj } from '../testing/some.testing'
import { arrayAt } from './arrayAt'

test('arrayAt', () => {
  expect(arrayAt([9, 3, 6, 7], -1)).toMatchObject(someObj(7))

  expect(arrayAt([3, 5, 6, 122], 10)).toMatchObject(noneObj())
})
