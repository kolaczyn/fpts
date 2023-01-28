import { fizzBuzz } from './fizz-buzz'

test('fizz-buzz', () => {
  expect(fizzBuzz()).toMatchSnapshot()
})
