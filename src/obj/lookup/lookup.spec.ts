import { testNone, testSome } from '../..'
import { lookup } from './lookup'

test('lookup', () => {
  const exampleLookup0 = lookup<string>({})
  expect(exampleLookup0.getAll()).toMatchObject({})

  const exampleLookup1 = exampleLookup0.set('hello', 'world')
  expect(exampleLookup1.getAll()).toMatchObject({
    hello: 'world',
  })

  expect(exampleLookup1.getOr('foo', 'bar')).toEqual('bar')
  expect(exampleLookup1.getOr('hello', 'bar')).toEqual('world')

  expect(exampleLookup1.get('hello')).toMatchObject(testSome('world'))
  expect(exampleLookup1.get('hello')).toMatchObject(testSome('world'))
  const exampleLookup2 = exampleLookup1.set('foo', 'bar')
  const exampleLookup3 = exampleLookup2.remove('hello')
  expect(exampleLookup3.get('hello')).toMatchObject(testNone())
})
