const path = require('path')
const express = require('express')
const app = express()

const config = require('./config')

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/branches')
})

app.get('/branches', (req, res) => {
  res.render('branches', { title: 'Hey', message: 'Hello there!' })
})

app.listen(config.PORT)
