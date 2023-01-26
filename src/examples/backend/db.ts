import { none, some } from '../..'
import { Invoice, User } from './types'

export const dbUsers: User[] = [
  {
    id: 1,
    age: 21,
    name: 'Damian',
    gender: none(),
    invoices: ['123', '987'],
  },
  {
    id: 2,
    age: 30,
    name: 'Blaine',
    gender: some('other'),
    invoices: [],
  },
]

export const dbInvoices: Invoice[] = [
  { amount: 420.69, id: '123', userId: 1 },
  { amount: 100, id: '333', userId: 999 },
]
