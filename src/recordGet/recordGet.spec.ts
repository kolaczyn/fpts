import { none } from '../primitives/none'
import { some } from '../primitives/some'
import { recordGet } from './recordGet'

describe('recordGet', () => {
  test('field exists', () => {
    const record = {
      hello: 'world',
    }

    expect(recordGet(record, 'hello')).toEqual(some('world'))
  })

  test('doesnt exist', () => {
    const record = {
      hello: 'world',
    }

    expect(recordGet(record, 'koko')).toEqual(none)
  })
})
