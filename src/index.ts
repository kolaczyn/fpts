export { Lookup, lookup } from './obj/lookup/lookup'
export {
  Maybe,
  isNone,
  isSome,
  toSome,
  maybeCatch,
  unwrapOr,
} from './maybe/maybe'
export { Result, isErr, isOk, resultCatch, toOk } from './result/result'
export { arrAt } from './arr/arrAt/arrayAt'
export { arrFind } from './arr/arrFind/arrFind'
export { get } from './obj/get/get'
export { objFilter } from './obj/objFilter/objFilter'
export { objMap } from './obj/objMap/objMap'
export { none, None } from './maybe/none'
export { pipe } from './fn/pipe/pipe'
export { Tuple } from './arr/tuple/tuple'
export { range } from './arr/range/range'
export { objGet } from './obj/objGet/objGet'
export { some, Some } from './maybe/some'
export { store, Action, Reducer, Store } from './store/store'
export { toNum as toNumber } from './str/toNum/toNum'
export { zip } from './arr/zip/zip'
export { tupleEq } from './arr//tupleEq/tupleEq'

export { noneObj } from './test/none-testing'
export { someObj } from './test/some.testing'
