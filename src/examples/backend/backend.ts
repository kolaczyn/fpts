import { arrayAt, Maybe, some } from '../..'
import { arrayFind } from '../../arrayFind/arrayFind'
import { dbInvoices, dbUsers } from './db'
import { Invoice, User } from './types'

const getAllUsersFromDb = (): Maybe<User[]> => some(dbUsers)
const getUserById = (id: User['id']) => getAllUsersFromDb().bind(users => arrayFind(users, user => user.id === id))

const getAllInvoicesFromDb = (): Maybe<Invoice[]> => some(dbInvoices)
const getInvoiceById = (id: string): Maybe<Invoice> =>
  getAllInvoicesFromDb().bind(invoices => arrayFind(invoices, invoice => invoice.id === id))

export const getLatestUserInvoiceAmount = (userId: number) =>
  getUserById(userId)
    .bind(user => arrayAt(user.invoices, 0))
    .bind(invoiceId => getInvoiceById(invoiceId))
    .map(invoice => invoice.amount)
