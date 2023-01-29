import { optionCommonTest } from './optionCommonTest'

export const testSome = <T>(payload: T) => ({
  some: payload,
  ...optionCommonTest,
})
