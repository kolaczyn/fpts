import { None, none } from './none'
import { Some, some } from './some'

export type Option<T> = Some<T> | None<T>

const isMaybe = <T>(payload: unknown): payload is Option<T> =>
  typeof payload === 'object' && payload !== null
    ? 'some' in payload || 'none' in payload
    : false

export const isSome = <T>(maybe: Option<T>): maybe is Some<T> => 'some' in maybe
export const isNone = <T>(maybe: Option<T>): maybe is None<T> => 'none' in maybe
export const toSome = <T>(payload: T): Option<T> => some(payload)

export const normalizeMaybe = <T>(value: Option<T> | T): Option<T> =>
  isMaybe(value) ? value : some(value)

export const maybeCatch = <T>(fn: () => T) => {
  try {
    return some(fn())
  } catch {
    return none()
  }
}

export const unwrapOr = <T>(maybe: Option<T>, fallback: T) =>
  isSome(maybe) ? maybe.some : fallback
