module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  res.send('500', 500)
}
