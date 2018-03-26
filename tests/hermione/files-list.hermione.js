const assert = require('assert')

describe('Корректное отображение файлов в одной из веток', () => {
  it('Для ветки hw01_adaptive-layout отображается корректный список файлов', function () {
    return this.browser
      .url('/')
      .click('a[href="/branches/gh-pages"]')
      .getText('.page__files')
      .then((text) => {
        const files = 'Файлы README.md css hw01 hw02 hw03 img index.html'
        assert.equal(text, files.replace(/\s/g, '\n'))
      })
  })
})
