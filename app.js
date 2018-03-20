const express = require('express')
const app = express()

const config = require('./config')

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}`))
