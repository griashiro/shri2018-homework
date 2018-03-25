const express = require('express')
const router = express.Router()

const getPath = require('../helpers/get-path')
const models = require('../models')

router.get('/:branchName', async (req, res, next) => {
  const path = getPath(req.query.path)
  const branchName = req.params.branchName

  const isPathOk = await models.isPathExists(branchName, path)
  const isBranchOk = await models.isBranchExists(branchName)

  if (!isPathOk || !isBranchOk) {
    next()
  }

  res.render('branches', await models.getData(branchName, path))
})

module.exports = router
