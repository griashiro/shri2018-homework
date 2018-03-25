const express = require('express')
const router = express.Router()

const asyncMiddleware = require('../middleware/async-middleware')
const getPath = require('../helpers/path').getPath
const models = require('../models')

router.get('/:branchName/:commitHash', asyncMiddleware(async (req, res, next) => {
  const path = getPath(req.query.path)
  const branchName = req.params.branchName
  const commitHash = req.params.commitHash

  const isPathOk = await models.isPathExists(branchName, path)
  const isBranchOk = await models.isBranchExists(branchName)
  const isCommitOk = await models.isCommitExists(commitHash, branchName)

  if (isPathOk && isBranchOk && isCommitOk) {
    res.render('gui', await models.getData(branchName, path, commitHash))
  } else {
    next()
  }
}))

module.exports = router
