import { none } from '../primitives/none'
import { someObj } from '../testing/some.testing'
import { toNumber } from './toNumber'

describe('to number', () => {
  test('happy path', () => {
    expect(toNumber('39')).toMatchObject(someObj(39))
  })

  test('non-number string', () => {
    expect(toNumber('dlafjks')).toEqual(none)
  })
})
