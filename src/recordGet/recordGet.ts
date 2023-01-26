import { Maybe } from '../maybe/maybe'
import { none } from '../primitives/none'
import { some } from '../primitives/some'

export const recordGet = <K extends string | number, V>(record: Record<K, V>, key: K): Maybe<V> =>
  record[key] !== undefined ? some(record[key]) : none()
