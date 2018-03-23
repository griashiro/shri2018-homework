const sliceCols = require('../helpers/slice-columns')

module.exports = (stdout, path) => {
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
