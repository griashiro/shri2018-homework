module.exports = async (promise) => {
  const { error, stdout, stderr } = await promise
  // TODO: запись ошибок в log
  return stdout
}
