const gitLsTree = require('../helpers/git-ls-tree')

module.exports = async () => {
  let { error, stdout, stderr } = await gitLsTree()

  return stdout.trim().split(/\s/)
}
