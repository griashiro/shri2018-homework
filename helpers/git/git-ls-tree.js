const git = require('./git')

module.exports = async (branchName, path, commitHash) => {
  const branchPrefix = commitHash ? '' : 'remotes/origin/'
  const treeIsh = commitHash || branchName
  return await git('ls-tree', `${branchPrefix}${treeIsh} '${path}'`)
}
