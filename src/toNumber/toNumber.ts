import { none } from '../maybe/none'
import { some } from '../maybe/some'

export const toNumber = (str: string) =>
  Number.isNaN(Number(str)) ? none() : some(Number(str))
