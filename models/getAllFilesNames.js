const getShellStdOut = require('../helpers/shell').getStdOut
const git = require('../helpers/git')

const parsetGitLsStdout = require('../helpers/parse-git-ls-stdout')

module.exports = async (branchName, path, commitHash) => {
  const stdout = await getShellStdOut(git.ls(branchName, path, commitHash))

  return parsetGitLsStdout(stdout, path)
}
