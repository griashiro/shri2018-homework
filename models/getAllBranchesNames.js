const getShellStdOut = require('../helpers/shell').getStdOut
const git = require('../helpers/git')

const parseBranches = require('../helpers/parse-git-branch-stdout')
const sliceCols = require('../helpers/slice-columns')
const getBranchUrl = require('../helpers/get-branch-url')

module.exports = async () => {
  const stdout = await getShellStdOut(git.branch())
  const names = parseBranches(sliceCols(stdout, 2))
  const hrefs = names.map(branchName => {
    return getBranchUrl(branchName)
  })

  return { names, hrefs }
}
