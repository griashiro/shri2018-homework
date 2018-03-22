const input = `
gh-pages
hw02_touch-user-input
master
origin/gh-pages
origin/hw01_adaptive-layout
origin/hw02_touch-user-input
origin/hw03_multimedia
origin/master
remotes/origin/HEAD -> remotes/origin/master
remotes/origin/gh-pages
remotes/origin/hw01_adaptive-layout
remotes/origin/hw02_touch-user-input
remotes/origin/hw03_multimedia
remotes/origin/master
`

const expect = [
  'master', 'gh-pages', 'hw01_adaptive-layout',
  'hw02_touch-user-input', 'hw03_multimedia'
].sort()

module.exports = {
  input,
  expect
}
