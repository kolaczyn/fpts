export type Some<T> = {
  some: T
}

export const some = <T>(payload: T): Some<T> => ({
  some: payload,
})
