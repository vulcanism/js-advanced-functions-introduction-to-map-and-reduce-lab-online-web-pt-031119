
function mapToNegativize(sourceArray) {
  const negatives = []
  for (const number of sourceArray) {
    const newNegative = number * -1
    negatives.push(newNegative)
  }
  return negatives
}

function mapToNoChange(sourceArray) {

}
