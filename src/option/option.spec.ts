import { Option, isNone, isSome, optionCatch, toSome } from './option'
import { none } from './none'
import { some } from './some'
import { testSome } from '../test/testSome'
import { toNum } from '../str/toNum/toNum'
import { testNone } from '../test/testNone'

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
    expect(optionCatch(fn)).toMatchObject(testNone())
    expect(optionCatch(() => 39)).toMatchObject(testSome(39))
  })

  test('dumb tests to hit 100% coverage', () => {
    expect(toSome(21)).toMatchObject(testSome(21))
  })

  describe('bind & map', () => {
    test('some at the end', () => {
      const lol = some(99).map(x => x + 1)
      expect(lol).toMatchObject(testSome(100))
    })

    test('none at the end', () => {
      const lol = some('100')
        .bind(x => some(x + 1))
        .map(x => `${x}--`)
        .bind(x => toNum(x))
        .map(x => `->${x}`)
        .bind(_ => none())
        .map(x => x)

      expect(lol).toMatchObject(testNone())
    })
  })
})
