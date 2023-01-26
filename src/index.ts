export { Lookup, lookup } from './record/lookup/lookup'
export {
  Maybe,
  isNone,
  isSome,
  toSome,
  maybeCatch,
  unwrapOr,
} from './maybe/maybe'
export { Result, isErr, isOk, resultCatch, toOk } from './result/result'
export { arrayAt } from './arr/arrayAt/arrayAt'
export { filterObject } from './record/filterObject/filterObject'
export { mapObject } from './record/mapObject/mapObject'
export { none, None } from './maybe/none'
export { pipe } from './fn/pipe/pipe'
export { Tuple } from './arr/tuple/tuple'
export { range } from './arr/range/range'
export { recordGet } from './record/recordGet/recordGet'
export { some, Some } from './maybe/some'
export { store, Action, Reducer, Store } from './store/store'
export { toNumber } from './toNumber/toNumber'
export { zip } from './arr/zip/zip'
export { tupleEq } from './arr//tupleEq/tupleEq'

export { noneObj } from './test/none-testing'
export { someObj } from './test/some.testing'
