const git = require('../helpers/git')
const cut = require('../helpers/cut')

module.exports = async (branchName) => {
  let { error, stdout, stderr } = await git('log', `${branchName} --pretty="%h %s"`)
  const commits = stdout

  ;({ error, stdout, stderr } = await cut(commits, '1-7'))
  const hashes = stdout.trim().split(/\s/)

  ;({ error, stdout, stderr } = await cut(commits, '9-'))
  const messages = stdout.trim().split(/\n/)

  return {
    hashes, messages
  }
}
