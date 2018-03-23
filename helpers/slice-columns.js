module.exports = (multilineText, start, end) => {
  const lines = multilineText.split('\n')
  return lines.map(line => line.slice(start, end)).join('\n').trim()
}
