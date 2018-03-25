const git = require('./git')

module.exports = (args = '--all') => {
  return git('branch', args)
}
