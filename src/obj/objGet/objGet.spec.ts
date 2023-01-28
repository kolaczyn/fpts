import { testNone, testSome } from '~'
import { objGet } from './objGet'

describe('objGet', () => {
  test('field exists', () => {
    const record = {
      hello: 'world',
    }

    expect(objGet(record, 'hello')).toEqual(testSome('world'))
  })

  test('doesnt exist', () => {
    const record: Record<string, string> = {
      hello: 'world',
    }

    expect(objGet(record, 'koko')).toMatchObject(testNone())
  })
})
