const gitLsTree = require('../helpers/git-ls-tree')
const cut = require('../helpers/cut')

module.exports = async (treeIsh, path) => {
  let { error, stdout, stderr } = await gitLsTree(treeIsh, path)
  const bashOutput = stdout

  ;({ error, stdout, stderr } = await cut(bashOutput, '8-11'))
  const types = stdout.trim().split(/\s/)

  ;({ error, stdout, stderr } = await cut(bashOutput, '13-19'))
  const hashes = stdout.trim().split(/\s/)

  ;({ error, stdout, stderr } = await cut(bashOutput, '54-'))
  const files = stdout.trim().split(/\s/)

  return files.map((file, i) => {
    return {
      name: file,
      href: '?path=' + (path ? `${path}${file.split('/').pop()}` : file),
      type: types[i],
      hash: hashes[i]
    }
  })
}
