import { Maybe } from '../maybe/maybe'
import { none } from '../primitives/none'
import { some } from '../primitives/some'

export const recordGet = <V>(record: Record<string, V>, key: string): Maybe<V> =>
  record[key] !== undefined ? some(record[key]) : none
