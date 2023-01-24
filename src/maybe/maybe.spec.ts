import { Maybe, isNone, isSome, maybeCatch, unwrapOr, toSome } from './maybe'
import { none } from '../primitives/none'
import { some } from '../primitives/some'

const getExampleSome = (): Maybe<number> => some(13)
const getExampleNone = (): Maybe<number> => none

describe('maybe', () => {
  test('accessing fields in TypeScript', () => {
    const maybe = getExampleSome()

    // @ts-expect-error: you shouldn't be able to access the field without checking
    maybe.some
    // @ts-expect-error: you shouldn't be able to access the field without checking
    maybe.none

    // jest throws errors if there are no tests, so here's a dummy one :p
    expect(true).toBeTruthy()
  })
  test('some', () => {
    const maybe = getExampleSome()

    if (isSome(maybe)) {
      expect(maybe.some).toBe(13)
      // @ts-expect-error: you shouldn't be able to access the field without checking
      maybe.none
    }
  })

  test('none', () => {
    const maybe = getExampleNone()

    if (isNone(maybe)) {
      expect(maybe.none).toBe('none')
      // @ts-expect-error: you shouldn't be able to access the field without checking
      maybe.some
    }
  })

  test('maybeCatch', () => {
    const fn = () => {
      throw new Error('error')
    }
    expect(maybeCatch(fn)).toEqual(none)
    expect(maybeCatch(() => 39)).toEqual(some(39))
  })

  test('unwrap or', () => {
    expect(unwrapOr(some(6), 9)).toEqual(6)
    expect(unwrapOr(none, 9)).toEqual(9)
  })

  test('dumb tests to hit 100% coverage', () => {
    expect(toSome(21)).toEqual(some(21))
  })
})
