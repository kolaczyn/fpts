import { Some, some } from '../option/some'

export type Ok<T> = Some<T>
export const ok = some
