import { Some, some } from '../maybe/some'

export type Ok<T> = Some<T>
export const ok = some
