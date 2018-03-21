const express = require('express')
const router = express.Router()

const getAllFilesNames = require('../models/getAllFilesNames')
const getAllBranchesNames = require('../models/getAllBranchesNames')
const getAllCommitsHashes = require('../models/getAllCommitsHashes')
const getHeadHash = require('../models/getHeadHash')

router.get('/:branchName', async (req, res, next) => {
  const branchName = req.params.branchName
  const branches = await getAllBranchesNames()
  const commits = await getAllCommitsHashes()
  const headHash = await getHeadHash()
  const files = await getAllFilesNames()

  // TODO: вылетает, если придет неверное имя ветки из-за того, что ф-ция async
  if (!branches.includes(branchName)) {
    next('route')
  }

  const messageStd = branches.join(' ')
    + '\n' + commits.join(' ')
    + '\n' + headHash.join(' ')
    + '\n' + files.join(' ')

  res.render('branches', { title: 'Ветка', message: messageStd})
})

module.exports = router
