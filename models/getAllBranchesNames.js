const git = require('../helpers/git')
const parseBranches = require('../helpers/parse-branches')
const sliceMultiline = require('../helpers/slice-multiline')

module.exports = async () => {
  const { error, stdout, stderr } = await git.branch()

  return parseBranches(sliceMultiline(stdout, 2))
}
