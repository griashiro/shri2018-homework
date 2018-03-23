const express = require('express')
const router = express.Router()

const urlencode = require('urlencode')

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

  let path = urlencode.decode(req.query.path) || ''
  let files = await getAllFilesNames('remotes/origin/' + branchName, path)

  if (path && !files.some(file => file.name === path)) {
    res.status(404).send('404')
  }

  let back
  let content

  if (path) {
    const foo = path.split('/')
    foo.pop()
    back = '?path=' + foo.join('/')

    if (files[0].type === 'tree') {
      path += '/'
      files = await getAllFilesNames('remotes/origin/' + branchName, path)
    } else {
      content = await getContentFrom(files[0].hash)
    }

    files = files.map(file => {
      file.name = file.name.split('/').pop()
      return file
    })
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
