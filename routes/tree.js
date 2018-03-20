const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('branches', { title: 'Все ветки', message: 'Hello there!' })
})

module.exports = router
