import { none } from '../primitives/none'
import { some } from '../primitives/some'
import { lookup } from './lookup'

test('lookup', () => {
  const exampleLookup0 = lookup<string>({})
  expect(exampleLookup0.getAll()).toMatchObject({})

  const exampleLookup1 = exampleLookup0.set('hello', 'world')
  expect(exampleLookup1.getAll()).toMatchObject({
    hello: 'world',
  })

  expect(exampleLookup1.getOr('foo', 'bar')).toEqual('bar')

  expect(exampleLookup1.get('hello')).toEqual(some('world'))
  const exampleLookup2 = exampleLookup1.remove('hello')
  expect(exampleLookup2.get('hello')).toEqual(none)
})
