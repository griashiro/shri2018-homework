const git = require('../helpers/git')
const sliceMultiline = require('../helpers/slice-multiline')

module.exports = async (treeIsh, path) => {
  let { error, stdout, stderr } = await git.ls(treeIsh, path)

  const types = sliceMultiline(stdout, 7, 11).split(/\n/)
  const hashes = sliceMultiline(stdout, 12, 19).split(/\n/)
  const files = sliceMultiline(stdout, 53).split(/\n/)

  return files.map((file, i) => {
    return {
      name: file,
      href: '?path=' + (path ? `${path}${file.split('/').pop()}` : file),
      type: types[i],
      hash: hashes[i]
    }
  })
}
