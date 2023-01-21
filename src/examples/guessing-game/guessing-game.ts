import { isNone, Maybe, pipe } from '../..'
import { arrayAt } from '../../arrayAt/arrayAt'

const cpuAnswers = {
  tooLow: 'looLow',
  correct: 'correct',
  tooHigh: 'tooHigh',
  youShouldAskFirst: 'youShouldAskFirst',
} as const
type CpuAnswer = (typeof cpuAnswers)[keyof typeof cpuAnswers]

type PlayerTurn = {
  guess: number
}

type CpuTurn = {
  answer: CpuAnswer
}

type Turn = {
  playerTurn: PlayerTurn
  cpuTurn: CpuTurn
}

type GameState = {
  correctAnswer: number
  turns: Turn[]
}

const initState = (correctAnswer: number): GameState => ({
  correctAnswer,
  turns: [],
})

const getAnswerFromCpu = (gameState: GameState) => {
  const lastTurn = arrayAt(gameState.turns, -1)
  if (isNone(lastTurn)) {
    return cpuAnswers.youShouldAskFirst
  }
  const lastTurnGuess = lastTurn.some.playerTurn.guess

  if (gameState.correctAnswer < lastTurnGuess) return cpuAnswers.tooHigh
  if (gameState.correctAnswer === lastTurnGuess) return cpuAnswers.correct
  if (gameState.correctAnswer > lastTurnGuess) return cpuAnswers.tooLow
}

const gameLoop = (gameState: GameState) => {}

export const guessingGame = () => {
  const correctAnswer = 42
  const gameState: GameState = initState(correctAnswer)
}
