module.exports = (err, req, res, next) => {
  console.error('error-handler', err);

  if (res.headersSent) {
    return next(err)
  }

  res.status(500).send('500')
}
