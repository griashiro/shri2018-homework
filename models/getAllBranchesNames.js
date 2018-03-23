const gitBranch = require('../helpers/git-branch')
const parseBranches = require('../helpers/parse-branches')
const sliceMultiline = require('../helpers/slice-multiline')

module.exports = async () => {
  const { error, stdout, stderr } = await gitBranch()

  return parseBranches(sliceMultiline(stdout, 2))
}
