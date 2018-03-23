module.exports = (files) => {
  return files.map(file => {
    file.name = file.name.split('/').pop()
    return file
  })
}
