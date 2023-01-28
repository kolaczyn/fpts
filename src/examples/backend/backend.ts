import { arrAt, arrFind, get, Option, some } from '~'
import { dbInvoices, dbUsers } from './db'
import { Invoice, User } from './types'

const getAllUsersFromDb = (): Option<User[]> => some(dbUsers)
const getUserById = (id: User['id']) =>
  getAllUsersFromDb().bind(users => arrFind(users, user => user.id === id))

const getAllInvoicesFromDb = (): Option<Invoice[]> => some(dbInvoices)
const getInvoiceById = (id: string): Option<Invoice> =>
  getAllInvoicesFromDb().bind(invoices =>
    arrFind(invoices, invoice => invoice.id === id)
  )

export const getLatestUserInvoiceAmount = (userId: number) =>
  getUserById(userId)
    .map(get('invoices'))
    .bind(invoices => arrAt(invoices, 0))
    .bind(invoiceId => getInvoiceById(invoiceId))
    .map(get('amount'))

export const getAllUserInvoicesAmount = (userId: number) =>
  getUserById(userId)
    .map(get('invoices'))
    .map(invoices =>
      invoices.reduce(
        (sum, invoiceId) =>
          getInvoiceById(invoiceId).map(get('amount')).unwrapOr(0) + sum,
        0
      )
    )
    .map(amount => `user no.${userId} has grand total of ${amount}`)
    .unwrapOr('Something went wrong')
