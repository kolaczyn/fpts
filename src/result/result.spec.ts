import { err } from '../primitives/error'
import { ok } from '../primitives/ok'
import { isErr, resultCatch, toOk } from './result'

describe('result', () => {
  test('ok', () => {
    const fn = () => 901
    expect(resultCatch(fn)).toEqual(ok(901))
  })

  describe('resultCatch', () => {
    test('error', () => {
      const fn = () => {
        throw new Error('I am error')
      }
      expect(resultCatch(fn)).toEqual(err('I am error'))
    })

    test('number', () => {
      const fn = () => {
        throw 69
      }
      expect(resultCatch(fn)).toEqual(err('69'))
    })

    test('string', () => {
      const fn = () => {
        throw 'I am error'
      }
      expect(resultCatch(fn)).toEqual(err('I am error'))
    })

    test('object', () => {
      const fn = () => {
        throw {
          hello: 'world',
        }
      }
      expect(resultCatch(fn)).toEqual(err(JSON.stringify({ hello: 'world' })))
    })
  })

  describe('dumb tests to reach 100% test coverage :p', () => {
    expect(isErr(err('lol error'))).toEqual(true)
    expect(isErr(ok(69))).toEqual(false)
    expect(toOk('loli')).toEqual(ok('loli'))
  })
})
