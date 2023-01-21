import { None, none } from '../primitives/none'
import { Some, some } from '../primitives/some'

export type Maybe<T> = Some<T> | None

export const isSome = <T>(maybe: Maybe<T>): maybe is Some<T> => 'some' in maybe
export const isNone = <T>(maybe: Maybe<T>): maybe is None => 'none' in maybe
export const toSome = <T>(payload: T): Maybe<T> => some(payload)

export const maybeCatch = <T>(fn: () => T) => {
  try {
    return some(fn())
  } catch {
    return none
  }
}

export const unwrapOr = <T>(maybe: Maybe<T>, fallback: T) => (isSome(maybe) ? maybe.some : fallback)
