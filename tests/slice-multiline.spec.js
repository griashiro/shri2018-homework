const assert = require('chai').assert
const sliceMultiline = require('../helpers/slice-multiline')
const mock = require('./slice-multiline.mock')

describe ('Вырезать столбцы из многострочного текста', () => {
  it ('Первые 7 столбцов успешно вырезаны', () => {
    assert.equal(sliceMultiline(mock.input, 0, 7), mock.expect)
  })
})
