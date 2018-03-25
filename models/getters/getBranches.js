const getShellStdOut = require('../../helpers/shell').getStdOut
const git = require('../../helpers/git')

const parseBranches = require('../../helpers/processing').parseBranches
const sliceCols = require('../../helpers/processing').sliceColumns
const getBranchUrl = require('../../helpers/url').getBranchUrl

module.exports = async () => {
  const stdout = await getShellStdOut(git.branch())
  const names = parseBranches(sliceCols(stdout, 2))
  const hrefs = names.map(branchName => {
    return getBranchUrl(branchName)
  })

  const branches = names.map((name, i) => {
    return { name, href: hrefs[i] }
  })

  return branches
}
