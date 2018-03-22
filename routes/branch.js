const express = require('express')
const router = express.Router()

const getAllBranchesNames = require('../models/getAllBranchesNames')
const getCommitsFrom = require('../models/getCommitsFrom')
// const checkoutTo = require('../models/checkoutTo')
// const getHeadHash = require('../models/getHeadHash')

router.get('/:branchName', async (req, res, next) => {
  const branchName = req.params.branchName
  const branches = await getAllBranchesNames()

  if (!branches.includes(branchName)) {
    res.status(404).send('404')
  }

  const commits = await getCommitsFrom(branchName)

  res.render('branches', {
    title: 'Git Super',
    message: 'Замечательный Git',
    branches,
    commits
  })
})

module.exports = router
