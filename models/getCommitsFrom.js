const git = require('../helpers/git')
const cut = require('../helpers/cut')

module.exports = async (branchName) => {
  const gitArgs = `remotes/origin/${branchName} --pretty="%h %s"`

  let { error, stdout, stderr } = await git('log', gitArgs)
  const commits = stdout

  ;({ error, stdout, stderr } = await cut(commits, '1-7'))
  const hashes = stdout.trim().split(/\s/)

  ;({ error, stdout, stderr } = await cut(commits, '9-'))
  const messages = stdout.trim().split(/\n/)

  return {
    hashes, messages
  }
}
