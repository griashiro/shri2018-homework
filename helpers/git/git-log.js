const git = require('./git')

module.exports = (branchName) => {
  return git('log', `remotes/origin/${branchName} --pretty="%h %s"`)
}
