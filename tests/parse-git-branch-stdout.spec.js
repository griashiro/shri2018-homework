const assert = require('chai').assert
const parseBranches = require('../helpers/parse-git-branch-stdout')
const mock = require('./parse-git-branch-stdout.mock')

describe ('Получить названия веток из вывода git branch --all', () => {
  it ('Массив названий успешно сформирован', () => {
    assert.deepEqual(parseBranches(mock.input), mock.expect)
  })
})
