const express = require('express')
const router = express.Router()

const getPath = require('../helpers/url').getPath
const isPathExists = require('../models').isPathExists
const isBranchExists = require('../models').isBranchExists
const getData = require('../models').getData

router.get('/:branchName', async (req, res, next) => {
  const path = getPath(req.query.path)
  const branchName = req.params.branchName

  const isPathOk = await isPathExists(branchName, path)
  const isBranchOk = await isBranchExists(branchName)

  if (!isPathOk || !isBranchOk) {
    next()
  }

  res.render('branches', await getData(branchName, path))
}, (req, res) => {
  res.status(404).send('404')
})

module.exports = router
