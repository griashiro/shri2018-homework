module.exports = async (promise) => {
  try {
    const { error, stdout, stderr } = await promise
    return stdout
  } catch (e) {
    // TODO: запись ошибок в log
    return ''
  }
}
