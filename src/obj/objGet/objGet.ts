import { Maybe, none, some } from '../..'

export const objGet = <K extends string | number, V>(
  record: Record<K, V>,
  key: K
): Maybe<V> => (record[key] !== undefined ? some(record[key]) : none())
