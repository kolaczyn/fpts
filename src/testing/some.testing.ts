export const someObj = <T>(payload: T) => ({
  some: payload,
  bind: expect.any(Function),
})
