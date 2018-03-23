const git = require('./git')

module.exports = async (args = '--all') => {
  return await git('branch', args)
}
