import {
  Option,
  isNone,
  isSome,
  maybeCatch,
  unwrapOr,
  toSome,
  normalizeMaybe,
} from './option'
import { none } from './none'
import { some } from './some'
import { someObj } from '../test/some.testing'
import { toNum } from '../str/toNum/toNum'
import { noneObj } from '../test/none-testing'

const getExampleSome = (): Option<number> => some(13)
const getExampleNone = (): Option<number> => none()

describe('option', () => {
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
    expect(maybeCatch(fn)).toMatchObject(noneObj())
    expect(maybeCatch(() => 39)).toMatchObject(someObj(39))
  })

  test('unwrap or', () => {
    expect(unwrapOr(some(6), 9)).toEqual(6)
    expect(unwrapOr(none(), 9)).toEqual(9)
  })

  test('dumb tests to hit 100% coverage', () => {
    expect(toSome(21)).toMatchObject(someObj(21))
  })

  test('normalize maybe', () => {
    expect(normalizeMaybe(some(21))).toMatchObject(someObj(21))
    expect(normalizeMaybe(some(null))).toMatchObject(someObj(null))

    expect(normalizeMaybe(null)).toMatchObject(someObj(null))
    expect(normalizeMaybe(none())).toMatchObject(noneObj())
    expect(normalizeMaybe(21)).toMatchObject(someObj(21))

    expect(normalizeMaybe({ hello: 'world' })).toMatchObject(
      someObj({ hello: 'world' })
    )
  })

  describe('bind & map', () => {
    test('some at the end', () => {
      const lol = some(99).map(x => x + 1)
      expect(lol).toMatchObject(someObj(100))
    })

    test('none at the end', () => {
      const lol = some('100')
        .bind(x => some(x + 1))
        .map(x => `${x}--`)
        .bind(x => toNum(x))
        .map(x => `->${x}`)
        .bind(_ => none())
        .map(x => x)

      expect(lol).toMatchObject(noneObj())
    })
  })
})
