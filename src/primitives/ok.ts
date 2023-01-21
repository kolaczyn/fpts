import { Some, some } from './some'

export type Ok<T> = Some<T>
export const ok = some
