import { store } from './store'

type GameState = {
  playerName: string
  score: number
}

type Action =
  | {
      type: 'increment'
    }
  | {
      type: 'decrement-by'
      payload: number
    }
  | {
      type: 'to-zero'
    }

const gameReducer = (state: GameState, action: Action): GameState => {
  if (action.type === 'to-zero')
    return {
      ...state,
      score: 0,
    }
  if (action.type === 'decrement-by')
    return {
      ...state,
      score: state.score - action.payload,
    }
  if (action.type === 'increment')
    return {
      ...state,
      score: state.score + 1,
    }
  return state
}

test('store', () => {
  const initialState: GameState = {
    playerName: 'Paweł',
    score: 4,
  }

  let gameStore = store(initialState, gameReducer)
  expect(gameStore.getState()).toEqual({ playerName: 'Paweł', score: 4 })

  gameStore = gameStore.dispatch({ type: 'increment' })
  expect(gameStore.getState()).toEqual({ playerName: 'Paweł', score: 5 })

  gameStore = gameStore.dispatch({ type: 'decrement-by', payload: 10 })
  expect(gameStore.getState()).toEqual({ playerName: 'Paweł', score: -5 })

  gameStore = gameStore.dispatch({ type: 'to-zero' })
  expect(gameStore.getState()).toEqual({ playerName: 'Paweł', score: 0 })
})
