import { testNone, testSome } from '~'
import { toNum } from './toNum'

describe('toNum', () => {
  test('happy path', () => {
    expect(toNum('39')).toMatchObject(testSome(39))
  })

  test('non-number string', () => {
    expect(toNum('dlafjks')).toEqual(testNone())
  })
})
