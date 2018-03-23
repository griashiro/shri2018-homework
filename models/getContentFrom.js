const gitCatFile = require('../helpers/git-cat-file')
const cut = require('../helpers/cut')

module.exports = async (hash) => {
  const { error, stdout, stderr } = await gitCatFile(hash)
  console.log('foo', stdout, error, stderr);

  return stdout
}
