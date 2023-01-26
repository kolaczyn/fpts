import { noneObj } from '../testing/none-testing'
import { someObj } from '../testing/some.testing'
import { recordGet } from './recordGet'

describe('recordGet', () => {
  test('field exists', () => {
    const record = {
      hello: 'world',
    }

    expect(recordGet(record, 'hello')).toEqual(someObj('world'))
  })

  test('doesnt exist', () => {
    const record: Record<string, string> = {
      hello: 'world',
    }

    expect(recordGet(record, 'koko')).toMatchObject(noneObj())
  })
})
