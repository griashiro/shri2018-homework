const exec = require('./git')

module.exports = async (treeIsh, path) => {
  return await git(`ls-tree ${treeIsh} ${path}`)
}
