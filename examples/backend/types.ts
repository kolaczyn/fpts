import { Option } from '~'

export type Gender = 'male' | 'female' | 'other'

export type User = {
  id: number
  name: string
  age: number
  gender: Option<Gender>
  invoices: string[]
}

export type Invoice = {
  id: string
  amount: number
  userId: number
}
