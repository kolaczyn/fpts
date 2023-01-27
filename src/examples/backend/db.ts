import { none, some } from '../..'
import { Gender, Invoice, User } from './types'

export const dbUsers: User[] = [
  {
    id: 1,
    age: 21,
    name: 'Damian',
    gender: none<Gender>(),
    invoices: ['123', '987'],
  },
  {
    id: 2,
    age: 30,
    name: 'Blaine',
    gender: some<Gender>('female'),
    invoices: [],
  },
  {
    id: 3,
    age: 10,
    name: 'Carl',
    gender: some<Gender>('male'),
    invoices: ['666', '777', '888'],
  },
]

export const dbInvoices: Invoice[] = [
  { amount: 420.69, id: '123', userId: 1 },
  { amount: 100, id: '333', userId: 999 },

  { amount: 5, id: '666', userId: 3 },
  { amount: 15, id: '777', userId: 3 },
  { amount: 80, id: '888', userId: 3 },
]
