export function modifyArrayPosition<T>(data: T[]) {
  if (data.length !== 0) {
    const firstObj = data[0]
    data.splice(0, 1)

    return {
      initialData: firstObj,
      data: [...data]
    }
  } else {
    return {
      initialData: null,
      data: []
    }
  }
}
export function truncate(input: string, size = 200) {
  if (input.length > 5) {
    return input.substring(0, size) + '...'
  }
  return input
}
