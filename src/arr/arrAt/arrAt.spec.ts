import { testNone } from '../../test/testNone'
import { testSome } from '../../test/testSome'
import { arrAt } from './arrayAt'

test('arrAt', () => {
  expect(arrAt([9, 3, 6, 7], -1)).toMatchObject(testSome(7))

  expect(arrAt([3, 5, 6, 122], 10)).toMatchObject(testNone())
})
