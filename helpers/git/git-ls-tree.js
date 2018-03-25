const git = require('./git')

module.exports = (branchName, path, commitHash) => {
  const branchPrefix = commitHash ? '' : 'remotes/origin/'
  const treeIsh = commitHash || branchName
  return git('ls-tree', `${branchPrefix}${treeIsh} '${path}'`)
}
