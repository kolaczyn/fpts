import { fizzBuzz } from './fizz-buzz'

describe('fizz-buzz', () => {
  it('print 100 fizzbuzz lines', () => {
    expect(fizzBuzz('100')).toMatchSnapshot()
  })

  it('handles invalid input', () => {
    expect(fizzBuzz('Nagatoro best girl')).toMatchSnapshot()
  })
})
