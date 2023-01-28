import { none, some } from '../..'

export const toNum = (str: string) =>
  Number.isNaN(Number(str)) ? none<number>() : some(Number(str))
