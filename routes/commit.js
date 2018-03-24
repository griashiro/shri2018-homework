const express = require('express')
const router = express.Router()

const getPath = require('../helpers/url').getPath
const isPathExists = require('../models/isPathExists')
const isBranchExists = require('../models/isBranchExists')
const isCommitExists = require('../models/isCommitExists')
const getData = require('../models/getData')

router.get('/:branchName/:commitHash', async (req, res, next) => {
  const path = getPath(req.query.path)
  const branchName = req.params.branchName
  const commitHash = req.params.commitHash

  const isPathOk = await isPathExists(branchName, path)
  const isBranchOk = await isBranchExists(branchName)
  const isCommitOk = await isCommitExists(commitHash, branchName)

  if (!isPathOk || !isBranchOk || !isCommitOk) {
    next()
  }

  res.render('branches', await getData(branchName, path, commitHash))
}, (req, res) => {
  res.status(404).send('404')
})

module.exports = router
