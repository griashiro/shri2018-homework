const getBranches = require('./getBranches')
const getFiles = require('./getFiles')
const getCommits = require('./getCommits')
const getFileContent = require('./getFileContent')
const getBackUrl = require('../helpers/url').getBackUrl

module.exports = async (branchName, path, commitHash) => {
  const data = {}

  data.backUrl = getBackUrl(path)
  data.branches = await getBranches()
  data.commits = await getCommits(branchName)
  data.files = await getFiles(branchName, path, commitHash)
  data.content = ''

  if (data.files.length === 1) {
    if (data.files[0].type === 'blob') {
      data.content = await getFileContent(data.files[0].hash)
    }
    if (data.files[0].type === 'tree') {
      data.files = await getFiles(branchName, path + '/', commitHash)
    }
  }

  return data
}
