const express = require('express')
const router = express.Router()

const getAllBranchesNames = require('../models/getAllBranchesNames')
const getCommitsFrom = require('../models/getCommitsFrom')
const getAllFilesNames = require('../models/getAllFilesNames')
const getContentFrom = require('../models/getContentFrom')

router.get('/:branchName', async (req, res, next) => {
  const branchName = req.params.branchName
  const branches = await getAllBranchesNames()

  if (!branches.includes(branchName)) {
    res.status(404).send('404')
  }

  const commits = await getCommitsFrom(branchName)

  let path = req.query.path || ''
  let files = await getAllFilesNames('remotes/origin/' + branchName, path)

  if (path && !files.some(file => file.name === path)) {
    res.status(404).send('404')
  }

  let back
  let content

  if (path) {
    if (files[0].type === 'tree') {
      const foo = path.split('/')
      foo.pop()
      back = '?path=' + foo.join('/')
      path += '/'
      files = await getAllFilesNames('remotes/origin/' + branchName, path)
    } else {
      const foo = path.split('/')
      foo.pop()
      back = '?path=' + foo.join('/')
      console.log(files[0].hash);
      content = await getContentFrom(files[0].hash)
    }
  }

  res.render('branches', {
    title: 'Git Super',
    message: 'Замечательный Git',
    branches,
    commits,
    back,
    files,
    content
  })
})

module.exports = router
