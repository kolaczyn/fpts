import { Err, err } from '../primitives/error'
import { Ok, ok } from '../primitives/ok'

export type Result<T> = Ok<T> | Err

export const isOk = <T>(option: Result<T>): option is Ok<T> => 'some' in option
export const isErr = <T>(option: Result<T>): option is Err => 'err' in option
export const toOk = <T>(payload: T): Result<T> => ok(payload)

export const resultCatch = <T>(fn: () => T) => {
  try {
    return ok(fn())
  } catch (e) {
    if (e instanceof Error) {
      return err(e.message)
    }
    if (typeof e === 'object') {
      return err(JSON.stringify(e))
    }
    return err(`${e}`)
  }
}
