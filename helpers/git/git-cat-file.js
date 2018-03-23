const git = require('./git')

module.exports = async (hash) => {
  return await git('cat-file', `blob ${hash}`)
}
