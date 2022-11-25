export const capitalize = (s: string) => {
  return s.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}
