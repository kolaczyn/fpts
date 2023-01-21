import { none } from '../primitives/none'
import { some } from '../primitives/some'

export const toNumber = (str: string) => (Number.isNaN(Number(str)) ? none : some(Number(str)))
