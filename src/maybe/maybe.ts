import { Some, some } from '../primitives/some'
import { None } from '../primitives/none'

export type Maybe<T> = Some<T> | None

export const isSome = <T>(maybe: Maybe<T>): maybe is Some<T> => 'some' in maybe
export const isNone = <T>(maybe: Maybe<T>): maybe is None => 'none' in maybe
export const toSome = <T>(payload: T): Maybe<T> => some(payload)
