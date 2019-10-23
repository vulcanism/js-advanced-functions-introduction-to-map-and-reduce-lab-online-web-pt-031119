
function mapToNegativize(sourceArray) {
  const negatives = []
  for (const number of sourceArray) {
    newNegative = number * -1
    negatives.push(newNegative)
  }
  return negatives
}
