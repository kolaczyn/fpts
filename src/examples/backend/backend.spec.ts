import { noneObj } from '../../testing/none-testing'
import { someObj } from '../../testing/some.testing'
import { getLatestUserInvoiceAmount } from './backend'

describe('backend', () => {
  describe('getLatestUserInvoiceAmount', () => {
    test('existing user', () => {
      expect(getLatestUserInvoiceAmount(1)).toMatchObject(someObj(420.69))
    })
    test('invalid user', () => {
      expect(getLatestUserInvoiceAmount(99999)).toMatchObject(noneObj())
    })
  })
})
