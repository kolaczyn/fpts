import { err } from '../primitives/error'
import { ok } from '../primitives/ok'
import { resultCatch } from './result'

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
})
