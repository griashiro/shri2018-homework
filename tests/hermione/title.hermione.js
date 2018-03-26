const assert = require('assert')

describe('Заголовок страницы', () => {
  it('Заголовок страницы соответствует ожидаемому', function () {
    return this.browser
      .url('/')
      .title()
      .then((title) => {
        assert.equal(title.value, 'Git View')
      })
  })
})
