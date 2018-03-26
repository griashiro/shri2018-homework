const assert = require('chai').assert
const sliceCols = require('../../helpers/processing').sliceColumns
const mock = require('./slice-columns.mock')

describe('Вырезать столбцы из многострочного текста', () => {
  it('Первые 7 столбцов успешно вырезаны', () => {
    assert.equal(sliceCols(mock.input, 0, 7), mock.expect)
  })
})
