import { None, none } from '../primitives/none'
import { Some, some } from '../primitives/some'

export type Maybe<T> = Some<T> | None<T>

const isMaybe = <T>(payload: unknown): payload is Maybe<T> =>
  typeof payload === 'object' && payload !== null ? 'some' in payload || 'none' in payload : false

export const isSome = <T>(maybe: Maybe<T>): maybe is Some<T> => 'some' in maybe
export const isNone = <T>(maybe: Maybe<T>): maybe is None<T> => 'none' in maybe
export const toSome = <T>(payload: T): Maybe<T> => some(payload)

export const normalizeMaybe = <T>(value: Maybe<T> | T): Maybe<T> => (isMaybe(value) ? value : some(value))

export const maybeCatch = <T>(fn: () => T) => {
  try {
    return some(fn())
  } catch {
    return none()
  }
}

export const unwrapOr = <T>(maybe: Maybe<T>, fallback: T) => (isSome(maybe) ? maybe.some : fallback)
