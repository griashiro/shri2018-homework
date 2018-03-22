const express = require('express')
const router = express.Router()

const getAllFilesNames = require('../models/getAllFilesNames')
const getAllBranchesNames = require('../models/getAllBranchesNames')
const checkoutTo = require('../models/checkoutTo')
const getAllCommitsHashes = require('../models/getAllCommitsHashes')
const getHeadHash = require('../models/getHeadHash')

router.get('/:branchName', async (req, res, next) => {
  const branchName = req.params.branchName
  const branches = await getAllBranchesNames()

  res.render('branches', { title: 'Ветка', message: branches.join(' ')})
})

module.exports = router
