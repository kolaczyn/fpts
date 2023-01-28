import { Option, none, some } from '~'

export const objGet = <K extends string | number, V>(
  record: Record<K, V>,
  key: K
): Option<V> => (record[key] !== undefined ? some(record[key]) : none())
