const assert = require('assert')

describe('Отображение ветки по умолчанию', () => {
  it('Отображается ветка по умолчанию', function () {
    return this.browser
      .url('/')
      .getText('.branch_selected')
      .then((text) => {
        assert.equal(text, 'master')
      })
  })
  it('Отображается список коммитов', function () {
    return this.browser
      .url('/')
      .isExisting('.page__commits')
      .then((exists) => {
        assert.ok(exists, 'Список коммитов не отображается')
      })
  })
  it('Отображается список файлов', function () {
    return this.browser
      .url('/')
      .isExisting('.page__files')
      .then((exists) => {
        assert.ok(exists, 'Список файлов не отображается')
      })
  })
})
