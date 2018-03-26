const assert = require('assert')

describe('Переключение списка веток', () => {
  it('Произошло переключение на ветку gh-pages', function () {
    return this.browser
      .url('/')
      .click('a[href="/branches/gh-pages"]')
      .getText('.branch_selected')
      .then((text) => {
        assert.equal(text, 'gh-pages')
      })
  })
})
