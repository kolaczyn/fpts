import { testNone } from '../../test/testNone'
import { testSome } from '../../test/testSome'
import { getAllUserInvoicesAmount, getLatestUserInvoiceAmount } from './backend'

describe('backend', () => {
  describe('getLatestUserInvoiceAmount', () => {
    test('existing user', () => {
      expect(getLatestUserInvoiceAmount(1)).toMatchObject(testSome(420.69))
    })
    test('invalid user', () => {
      expect(getLatestUserInvoiceAmount(99999)).toMatchObject(testNone())
    })
  })

  test('getAllUserInvoices', () => {
    expect(getAllUserInvoicesAmount(3)).toMatchObject(testSome(100))
  })
})
