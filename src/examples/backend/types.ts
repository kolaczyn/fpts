import { Maybe } from '../..'

export type Gender = 'male' | 'female' | 'other'

export type User = {
  id: number
  name: string
  age: number
  gender: Maybe<Gender>
  invoices: string[]
}

export type Invoice = {
  id: string
  amount: number
  userId: number
}
