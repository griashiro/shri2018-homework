const express = require('express')
const router = express.Router()

const getPath = require('../helpers/get-path')
const models = require('../models')

router.get('/:branchName/:commitHash', async (req, res, next) => {
  const path = getPath(req.query.path)
  const branchName = req.params.branchName
  const commitHash = req.params.commitHash

  const isPathOk = await models.isPathExists(branchName, path)
  const isBranchOk = await models.isBranchExists(branchName)
  const isCommitOk = await models.isCommitExists(commitHash, branchName)

  if (!isPathOk || !isBranchOk || !isCommitOk) {
    next()
  }

  res.render('branches', await models.getData(branchName, path, commitHash))
}, (req, res) => {
  res.status(404).send('404')
})

module.exports = router
