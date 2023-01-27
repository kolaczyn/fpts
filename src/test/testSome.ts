export const testSome = <T>(payload: T) => ({
  some: payload,
  bind: expect.any(Function),
  map: expect.any(Function),
  unwrapOr: expect.any(Function),
})
