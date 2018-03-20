const express = require('express')
const router = express.Router()

router.get('/:branchName/:commitHash', (req, res) => {
  res.render('branches', { title: 'Коммит', message: 'Hello there!' })
})

module.exports = router
