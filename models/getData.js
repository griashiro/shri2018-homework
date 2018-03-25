const getBranches = require('./getters/getBranches')
const getFiles = require('./getters/getFiles')
const getCommits = require('./getters/getCommits')
const getFileContent = require('./getters/getFileContent')
const getBackUrl = require('../helpers/url').getBackUrl
const isTopDirectory = require('../helpers/path').isTopDirectory

module.exports = async (branchName, path, commitHash) => {
  const data = {}

  data.backUrl = getBackUrl(path)
  data.branches = await getBranches()
  data.commits = await getCommits(branchName)
  data.files = await getFiles(branchName, path, commitHash)
  data.isTopDirectory = isTopDirectory(path)

  if (data.files.length === 1) {
    if (data.files[0].type === 'blob' && !isTopDirectory(path)) {
      data.hasContent = true
      data.content = await getFileContent(data.files[0].hash)
    }
    if (data.files[0].type === 'tree') {
      data.files = await getFiles(branchName, path + '/', commitHash)
    }
  }

  return data
}
