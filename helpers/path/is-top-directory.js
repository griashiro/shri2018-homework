module.exports = (path) => {
  return !Boolean(path.replace(/[\s.\/]/g, ''))
}
