const removeDuplicates = require('./remove-duplicates')

module.exports = (text) => {
  const branches = text.trim().match(/(?!^.*\/)[\w-]+$/gm)
  return removeDuplicates(branches).sort()
}
