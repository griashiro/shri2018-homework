const getCommits = require('./getters/getCommits')

module.exports = async (commitHash, branchName) => {
  const commits = await getCommits(branchName)
  return commits.some(commit => commit.hash === commitHash)
}
