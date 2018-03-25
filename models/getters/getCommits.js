const getShellStdOut = require('../../helpers/shell').getStdOut
const git = require('../../helpers/git')

const sliceCols = require('../../helpers/processing').sliceColumns
const getCommitUrl = require('../../helpers/url').getCommitUrl

module.exports = async (branchName) => {
  const stdout = await getShellStdOut(git.log(branchName))

  const hashes = sliceCols(stdout, 0, 7).split(/\n/)
  const messages = sliceCols(stdout, 8).split(/\n/)
  const hrefs = hashes.map(hash => {
    return getCommitUrl(branchName, hash)
  })

  const commits = hashes.map((hash, i) => {
    return { hash, message: messages[i], href: hrefs[i] }
  })

  return commits
}
