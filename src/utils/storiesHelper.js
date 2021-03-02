export function replaceById (array, element) {
  const arrayCopy = [ ...array ]
  if (!element) {
    return arrayCopy
  }
  const index = arrayCopy.findIndex(el => (el.id || el) === element.id)
  if (index === -1) {
    return arrayCopy
  }
  arrayCopy.splice(index, 1, element)
  return arrayCopy
}
