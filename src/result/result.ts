import { Ok, ok } from '../primitives/ok'
import { Error } from '../primitives/error'

export type Result<T> = Ok<T> | Error

export const isOk = <T>(option: Result<T>): option is Ok<T> => 'some' in option
export const isError = <T>(option: Result<T>): option is Error => 'error' in option
export const toOk = <T>(payload: T): Result<T> => ok(payload)
