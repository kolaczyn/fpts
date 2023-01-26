import { noneObj } from '../../test/none-testing'
import { someObj } from '../../test/some.testing'
import { arrAt } from './arrayAt'

test('arrAt', () => {
  expect(arrAt([9, 3, 6, 7], -1)).toMatchObject(someObj(7))

  expect(arrAt([3, 5, 6, 122], 10)).toMatchObject(noneObj())
})
