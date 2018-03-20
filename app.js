const path = require('path')
const express = require('express')
const app = express()

const treeRoute = require('./routes/tree')
const branchRoute = require('./routes/branch')
const commitRoute = require('./routes/commit')

const notFoundRoute = require('./routes/not-found')

const config = require('./config')

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.redirect('/branches')
})

app.use('/branches', treeRoute, branchRoute, commitRoute, notFoundRoute)

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  res.send('500', 500)
})

app.listen(config.PORT)
