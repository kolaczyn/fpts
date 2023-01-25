export type Some<T> = {
  some: T
  bind: () => 'bind'
}

export const some = <T>(payload: T): Some<T> => ({
  some: payload,
  bind: () => 'bind',
})
