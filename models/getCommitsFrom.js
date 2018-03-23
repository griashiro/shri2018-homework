const gitLog = require('../helpers/git-log')
const sliceMultiline = require('../helpers/slice-multiline')

module.exports = async (branchName) => {
  const { error, stdout, stderr } = await gitLog(branchName)

  const hashes = sliceMultiline(stdout, 0, 7).split(/\n/)
  const messages = sliceMultiline(stdout, 8).split(/\n/)

  return {
    hashes, messages
  }
}
