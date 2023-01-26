import { arrayAt, Maybe, pipe, some, unwrapOr } from '../..'
import { arrayFind } from '../../arr/arrFind/arrFind'
import { get } from '../../record/get/get'
import { dbInvoices, dbUsers } from './db'
import { Invoice, User } from './types'

const getAllUsersFromDb = (): Maybe<User[]> => some(dbUsers)
const getUserById = (id: User['id']) =>
  getAllUsersFromDb().bind(users => arrayFind(users, user => user.id === id))

const getAllInvoicesFromDb = (): Maybe<Invoice[]> => some(dbInvoices)
const getInvoiceById = (id: string): Maybe<Invoice> =>
  getAllInvoicesFromDb().bind(invoices =>
    arrayFind(invoices, invoice => invoice.id === id)
  )

export const getLatestUserInvoiceAmount = (userId: number) =>
  getUserById(userId)
    .map(get('invoices'))
    .bind(invoices => arrayAt(invoices, 0))
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
