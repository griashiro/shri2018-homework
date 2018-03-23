const getShellStdOut = require('../helpers/get-shell-std-out')
const git = require('../helpers/git')

const removeFullPath = require('../helpers/remove-full-path')
const parsetGitLsStdout = require('../helpers/parse-git-ls-stdout')

module.exports = async (branchName, path, commitHash) => {
  const stdout = await getShellStdOut(git.ls(branchName, path, commitHash))

  return removeFullPath(parsetGitLsStdout(stdout, path))
}
