const git = require('../helpers/git')

module.exports = async (hash) => {
  const { error, stdout, stderr } = await git.cat(hash)

  return stdout
}
