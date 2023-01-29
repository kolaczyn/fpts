import { OptionCommon } from './common'

export type None<T> = {
  none: 'none'
} & OptionCommon<T>

export const none = <T>(): None<T> => ({
  none: 'none',
  bind: _fn => none(),
  map: _fn => none(),
  unwrapOr: fallback => fallback,
  mapAsync: _fn => Promise.resolve(none()),
})
