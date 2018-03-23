const gitCatFile = require('../helpers/git-cat-file')

module.exports = async (hash) => {
  const { error, stdout, stderr } = await gitCatFile(hash)

  return stdout
}
