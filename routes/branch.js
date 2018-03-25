const express = require('express')
const router = express.Router()

const asyncMiddleware = require('../middleware/async-middleware')
const getPath = require('../helpers/path').getPath
const models = require('../models')

router.get('/:branchName', asyncMiddleware(async (req, res, next) => {
  const path = getPath(req.query.path)
  const branchName = req.params.branchName

  const isPathOk = await models.isPathExists(branchName, path)
  const isBranchOk = await models.isBranchExists(branchName)

  if (isPathOk && isBranchOk) {
    res.render('gui', await models.getData(branchName, path))
  } else {
    next()
  }
}))

module.exports = router
