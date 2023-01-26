import { noneObj, someObj } from '../..'
import { objGet } from './objGet'

describe('objGet', () => {
  test('field exists', () => {
    const record = {
      hello: 'world',
    }

    expect(objGet(record, 'hello')).toEqual(someObj('world'))
  })

  test('doesnt exist', () => {
    const record: Record<string, string> = {
      hello: 'world',
    }

    expect(objGet(record, 'koko')).toMatchObject(noneObj())
  })
})
