module.exports = {
  parseBranches: require('./parse-git-branch-stdout'),
  parseGitLs: require('./parse-git-ls-stdout'),
  removeDuplicates: require('./remove-duplicates'),
  removeFullPath: require('./remove-full-path'),
  sliceColumns: require('./slice-columns')
}
