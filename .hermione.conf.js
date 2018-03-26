module.exports = {
  baseUrl: 'http://localhost:8080',
  gridUrl: 'http://0.0.0.0:4444/wd/hub',
  browsers: {
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
  }
}
