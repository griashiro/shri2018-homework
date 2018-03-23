// const git = require('../helpers/git')

module.exports = async () => {
  // let { error, stdout, stderr } = await git('rev-parse --short HEAD')

  return stdout.trim().split(/\s/)
}
