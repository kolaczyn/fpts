import { Maybe } from '../maybe/maybe'
import { pipe } from '../pipe/pipe'
import { none } from '../primitives/none'
import { some } from '../primitives/some'

export type Lookup<T> = {
  set: (key: string, value: T) => Lookup<T>
  get: (key: string) => Maybe<T>
  getOr: (key: string, fallback: T) => T
  remove: (key: string) => Lookup<T>
  getAll: () => Record<string, T>
}

const removeEntryFromRecord = <T>(key: string, record: Record<string, T>) =>
  Object.entries(record)
    .filter(([currKey]) => currKey !== key)
    .reduce<Record<string, T>>(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    )

export const lookup = <T>(record: Record<string, T>): Lookup<T> => ({
  get: (key: string) => (key in record ? some(record[key]) : none),
  getOr: (key: string, fallback: T) => (key in record ? record[key] : fallback),
  getAll: () => record,
  set: (key: string, value: T) => lookup({ ...record, [key]: value }),
  remove: (key: string) =>
    // prettier-ignore
    pipe(
      [key, record] as const,
      ([key, _data]) => removeEntryFromRecord(key, _data),
      lookup
    ),
})
