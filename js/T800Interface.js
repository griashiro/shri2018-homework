class T800Interface {
  createDigitsInfo (container) {
    const TITLE = ['ANALYSIS', 'TRACKING', 'CRITERIA']
    const fragment = document.createDocumentFragment()

    this._addTextElemTo(fragment, TITLE[this._getRandNum(0, TITLE.length)])
    this._addTextElemTo(fragment, '*************')

    const minLinesCount = 10
    const maxLinesCount = 18
    const len = this._getRandNum(minLinesCount, maxLinesCount)

    for (let i = 0; i < len; ++i) {
      const randNum1 = this._getRandNum(10000, 100000)
      const randNum2 = this._getRandNum(100, 1000)
      const randNum3 = this._getRandNum(10, 100)

      this._addTextElemTo(fragment, `${randNum1} ${randNum2} ${randNum3}`)
    }

    container.appendChild(fragment)
  }

  createScanner (container) {
    const table = document.createElement('table')
    const num = 12

    for (let row = 0; row < num; ++row) {
      const tr = document.createElement('tr')
      for (let col = 0; col < num; ++col) {
        const td = document.createElement('td')
        tr.appendChild(td)
      }
      table.appendChild(tr)
    }

    const horizontalLine = document.createElement('div')
    horizontalLine.className = 'horizontal-line'
    const verticalLine = document.createElement('div')
    verticalLine.className = 'vertical-line'

    container.appendChild(horizontalLine)
    container.appendChild(verticalLine)

    container.appendChild(table)
  }

  _addTextElemTo (container, text) {
    const elem = document.createElement('p')
    elem.innerText = text
    container.appendChild(elem)
  }

  _getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

export default T800Interface;
