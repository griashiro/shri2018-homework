const express = require('express')
const router = express.Router()

const asyncMiddleware = require('../middleware/async-middleware')
const models = require('../models')

router.get('/', asyncMiddleware(async (req, res) => {
  const defaultBranch = await models.getDefaultBranch()
  res.redirect(`/branches/${defaultBranch}`)
}))

module.exports = router
