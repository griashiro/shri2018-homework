const git = require('./git')

module.exports = async (branchName) => {
  return await git('log', `remotes/origin/${branchName} --pretty="%h %s"`)
}
