module.exports = (path) => {
  const pathElems = path.split('/')
  pathElems.pop()
  return pathElems.length > 0 ? '?path=' + pathElems.join('/') : '?'
}
