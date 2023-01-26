import { arrAt, arrFind, get, Option, pipe, some, unwrapOr } from '../..'
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

const getInvoiceAmountWithFallback = (invoiceId: string): number =>
  pipe(getInvoiceById(invoiceId).map(get('amount')), invoice =>
    unwrapOr(invoice, 0)
  )

export const getAllUserInvoicesAmount = (userId: number) =>
  getUserById(userId)
    .map(get('invoices'))
    .map(invoices =>
      invoices.reduce((acc, id) => getInvoiceAmountWithFallback(id) + acc, 0)
    )
