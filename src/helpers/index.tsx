export const generateEmptyArray = (length: number): number[] => {
  return new Array(length).fill(0)
}

export const scrollBottom = (ref: HTMLDivElement | null): void => {
  ref?.scrollTo({
    top: ref?.scrollHeight,
    behavior: 'smooth',
  })
}
