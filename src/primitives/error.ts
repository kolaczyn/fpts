export type Err = {
  err: string
}

export const err = (reason: string): Err => ({
  err: reason,
})
