export const range = (n: number) => [...Array(n)].map((_, i) => i)

export const rangeFromTo = (from: number, to: number) => (to >= from ? range(to - from).map(n => n + from) : [])
