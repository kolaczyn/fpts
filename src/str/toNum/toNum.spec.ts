import { noneObj } from '../..'
import { someObj } from '../..'
import { toNum } from './toNum'

describe('toNum', () => {
  test('happy path', () => {
    expect(toNum('39')).toMatchObject(someObj(39))
  })

  test('non-number string', () => {
    expect(toNum('dlafjks')).toEqual(noneObj())
  })
})
