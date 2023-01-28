import { range, toNum } from '~'

const numToFizzBuzz = (num: number) => {
  if (num % 15 === 0) return 'Fizzbuzz'
  if (num % 3 === 0) return 'Fizz'
  if (num % 5 === 0) return 'Buzz'
  return num.toString()
}

export const fizzBuzz = (userInput: string) =>
  toNum(userInput)
    .map(n => range(n).map(numToFizzBuzz))
    .map(x => x.join('\n'))
    .unwrapOr('Invalid input')
