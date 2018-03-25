module.exports = (path) => {
  return !path.replace(/[\s./]/g, '')
}
