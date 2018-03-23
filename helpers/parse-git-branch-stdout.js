const removeDuplicates = require('./remove-duplicates')

module.exports = (stdout) => {
  const branches = stdout.trim().match(/(?!^.*\/)[\w-]+$/gm)
  return removeDuplicates(branches).sort()
}
