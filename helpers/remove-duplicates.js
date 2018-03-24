module.exports = (array) => {
  return array.filter((val, i, self) => {
    return self.indexOf(val) === i
  })
}
