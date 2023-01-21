export const pipe = (arg0: any, ...functions: any[]) => functions.reduce((accumulator, f) => f(accumulator), arg0)
