export type Error = {
  error: string
}

export const error = (reason: string) => ({
  error: reason,
})
