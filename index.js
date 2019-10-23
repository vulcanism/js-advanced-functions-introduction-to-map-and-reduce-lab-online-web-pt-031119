
function mapToNegativize(sourceArray) {
  const negatives = []
  for (const n of sourceArray) {
    const newNegative = n * -1
    negatives.push(newNegative)
  }
  return negatives
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  const doubles = []
  for (const n of sourceArray) {
    const newDouble = n * 2
    doubles.push(newDouble)
  }
  return doubles
}

function mapToSquare(sourceArray) {
  const squared = []
  for (const n of sourceArray) {
    const newSquare = n * n
    squared.push(newSquare)
  }
  return squared
}
