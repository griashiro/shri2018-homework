const assert = require('chai').assert
const parseBranches = require('../helpers/parse-branches')
const mock = require('./parse-branches.mock')

describe ('Получить названия веток из вывода git branch --all', () => {
  it ('Массив названий успешно сформирован', () => {
    assert.deepEqual(parseBranches(mock.input), mock.expect)
  })
})
