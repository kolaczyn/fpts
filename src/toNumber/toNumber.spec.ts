import { none } from '../primitives/none'
import { some } from '../primitives/some'
import { toNumber } from './toNumber'

describe('to number', () => {
  test('happy path', () => {
    expect(toNumber('39')).toEqual(some(39))
  })

  test('non-number string', () => {
    expect(toNumber('dlafjks')).toEqual(none)
  })
})
