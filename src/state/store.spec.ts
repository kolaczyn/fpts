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

describe('state', () => {
  test('putting into state', () => {
    const initialState: GameState = {
      playerName: 'Paweł',
      score: 4,
    }

    const game0 = store(initialState, gameReducer)
    expect(game0.getState()).toEqual({ playerName: 'Paweł', score: 4 })

    const game1 = game0.dispatch({ type: 'increment' })
    expect(game1.getState()).toEqual({ playerName: 'Paweł', score: 5 })

    const game2 = game1.dispatch({ type: 'decrement-by', payload: 10 })
    expect(game2.getState()).toEqual({ playerName: 'Paweł', score: -5 })

    const game3 = game2.dispatch({ type: 'to-zero' })
    expect(game3.getState()).toEqual({ playerName: 'Paweł', score: 0 })
  })
})
