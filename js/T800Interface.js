class T800Interface {
  createAnalyser (container) {
    const fragment = document.createDocumentFragment()

    this._addElemTo(fragment, 'ANALYSIS')
    this._addElemTo(fragment, '*************')

    const lenesCount = 18;

    for (let i = 0; i < lenesCount; ++i) {
      const randNum1 = this._getRandNum(10000, 100000)
      const randNum2 = this._getRandNum(100, 1000)
      const randNum3 = this._getRandNum(10, 100)

      this._addElemTo(fragment, `${randNum1} ${randNum2} ${randNum3}`)
    }

    container.appendChild(fragment)
  }

  createScanner (container) {
    const table = document.createElement('table')
    const cellsEachSide = 12

    for (let row = 0; row < cellsEachSide; ++row) {
      const tr = document.createElement('tr')
      for (let col = 0; col < cellsEachSide; ++col) {
        tr.appendChild(document.createElement('td'))
      }
      table.appendChild(tr)
    }

    this._addElemTo(container, null, 'horizontal-line')
    this._addElemTo(container, null, 'vertical-line')

    container.appendChild(table)
  }

  _addElemTo (container, text, className) {
    const elem = document.createElement('div')
    text ? (elem.innerText = text) : null
    className ? (elem.className = className) : null
    container.appendChild(elem)
  }

  _getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

export default T800Interface;
