const getShellStdOut = require('../helpers/shell').getStdOut
const git = require('../helpers/git')

const parsetGitLs = require('../helpers/processing').parseGitLs

module.exports = async (branchName, path, commitHash) => {
  const stdout = await getShellStdOut(git.ls(branchName, path, commitHash))

  return parsetGitLs(stdout, path)
}
