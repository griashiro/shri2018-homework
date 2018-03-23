const getShellStdOut = require('../helpers/get-shell-std-out')
const git = require('../helpers/git')

const sliceCols = require('../helpers/slice-columns')

module.exports = async (treeIsh, path) => {
  const stdout = await getShellStdOut(git.ls(treeIsh, path))

  const types = sliceCols(stdout, 7, 11).split(/\n/)
  const hashes = sliceCols(stdout, 12, 19).split(/\n/)
  const files = sliceCols(stdout, 53).split(/\n/)

  return files.map((file, i) => {
    return {
      name: file,
      href: '?path=' + (path ? `${path}${file.split('/').pop()}` : file),
      type: types[i],
      hash: hashes[i]
    }
  })
}
