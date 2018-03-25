const git = require('./git')

module.exports = (hash) => {
  return git('cat-file', `blob ${hash}`)
}
