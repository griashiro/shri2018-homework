const express = require('express')
const router = express.Router()

router.get('/:branchName', (req, res) => {
  res.render('branches', { title: 'Ветка', message: 'Hello there!' })
})

module.exports = router
