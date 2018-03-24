const getAllBranchesNames = require('./getAllBranchesNames')
const getAllFilesNames = require('./getAllFilesNames')
const getCommitsFrom = require('./getCommitsFrom')
const getContentFrom = require('./getContentFrom')
const getBackUrl = require('../helpers/url').getBackUrl

module.exports = async (branchName, path, commitHash) => {
  const data = {}

  data.backUrl = getBackUrl(path)
  data.branches = await getAllBranchesNames()
  data.commits = await getCommitsFrom(branchName)
  data.files = await getAllFilesNames(branchName, path, commitHash)
  data.content = ''

  if (data.files.length === 1) {
    if (data.files[0].type === 'blob') {
      data.content = await getContentFrom(data.files[0].hash)
    }
    if (data.files[0].type === 'tree') {
      data.files = await getAllFilesNames(branchName, path + '/', commitHash)
    }
  }

  return data
}
