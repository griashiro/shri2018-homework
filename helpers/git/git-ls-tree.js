const git = require('./git')

module.exports = async (treeIsh, path) => {
  return await git('ls-tree', `remotes/origin/${treeIsh} '${path}'`)
}
