import { pipe } from '../../pipe/pipe'
import { range } from '../../range/range'

export const fizzBuzz = () =>
  range(100)
    .map(num =>
      pipe(
        num,
        num => num + 1,
        num => {
          if (num % 15 === 0) return 'Fizzbuzz'
          if (num % 3 === 0) return 'Fizz'
          if (num % 5 === 0) return 'Buzz'
          return num.toString()
        }
      )
    )
    .join('\n')
