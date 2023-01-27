import { None, none } from './none'
import { Some, some } from './some'

export type Option<T> = Some<T> | None<T>

export const isSome = <T>(payload: Option<T>): payload is Some<T> =>
  'some' in payload
export const isNone = <T>(payload: Option<T>): payload is None<T> =>
  'none' in payload
export const toSome = <T>(payload: T): Option<T> => some(payload)

export const optionCatch = <T>(fn: () => T) => {
  try {
    return some(fn())
  } catch {
    return none()
  }
}

export const unwrapOr = <T>(payload: Option<T>, fallback: T) =>
  isSome(payload) ? payload.some : fallback
