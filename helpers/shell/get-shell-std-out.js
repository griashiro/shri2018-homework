module.exports = async (promise) => {
  try {
    const { stdout } = await promise
    return stdout
  } catch (e) {
    console.error(e)
    return ''
  }
}
