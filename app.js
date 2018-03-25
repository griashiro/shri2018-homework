const path = require('path')
const express = require('express')
const app = express()

const rootRoute = require('./routes/root')
const treeRoute = require('./routes/tree')
const branchRoute = require('./routes/branch')
const commitRoute = require('./routes/commit')
const notFoundRoute = require('./routes/page-not-found')

const errorHandler = require('./middleware/error-handler')

const config = require('./config')

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', rootRoute)
app.use('/branches', treeRoute, branchRoute, commitRoute)
app.use(notFoundRoute)
app.use(errorHandler)

app.listen(config.PORT)
