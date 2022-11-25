export const handleRequest = async <T>(
  promise: Promise<T>
): Promise<[T | null, any | null]> => {
  try {
    return [(await promise) as T, null]
  } catch (error) {
    return [null, error]
  }
}

export const handleAsync = async <T = any>(
  asyncFn: () => Promise<T>
): Promise<[T | null, any | null]> => {
  try {
    return [(await asyncFn()) as T, null]
  } catch (error) {
    return [null, error]
  }
}
