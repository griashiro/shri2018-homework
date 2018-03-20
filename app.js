const path = require('path')
const express = require('express')
const app = express()

const treeRoute = require('./routes/tree')
const branchRoute = require('./routes/branch')
const commitRoute = require('./routes/commit')

const config = require('./config')

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/branches')
})

app.use('/branches', treeRoute, branchRoute, commitRoute)

app.listen(config.PORT)
