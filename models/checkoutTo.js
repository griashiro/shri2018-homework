const git = require('../helpers/git')

module.exports = async (branch) => {
  let { error, stdout, stderr } = await git(`checkout ${branch}`)

  return stdout.trim().split(/\s/)
}
