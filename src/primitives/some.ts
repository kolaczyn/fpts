export type Some<T> = {
  some: T
}

export const some = <T>(some: T): Some<T> => ({
  some,
})
