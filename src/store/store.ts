export type Action = {
  type: string
  payload?: unknown
}

export type Reducer<TState, TAction extends Action> = (
  prevState: TState,
  action: TAction
) => TState

export type Store<TState, TAction extends Action> = {
  getState: () => TState
  dispatch: (action: TAction) => Store<TState, TAction>
}

export const store = <TState, TAction extends Action>(
  state: TState,
  reducer: Reducer<TState, TAction>
): Store<TState, TAction> => ({
  getState: () => state,
  dispatch: (action: TAction) => store(reducer(state, action), reducer),
})
