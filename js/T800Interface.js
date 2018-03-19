class T800Interface {
  createAnalyser (container) {
    const fragment = document.createDocumentFragment()

    this._addElemTo(fragment, 'ANALYSIS', 'text')
    this._addElemTo(fragment, '*********************', 'text')

    const lenesCount = 18;

    for (let i = 0; i < lenesCount; ++i) {
      const num1 = this._getRandDigits(6)
      const num2 = this._getRandDigits(4)
      const num3 = this._getRandDigits(2)
      const word = this._getRandWord()

      this._addElemTo(fragment, `${num1} ${num2} ${num3} ${word}`, 'text')
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

  createNavigator (container) {
    const fragment = document.createDocumentFragment()
    const cardinalDirection = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

    cardinalDirection.forEach((text) => {
      this._addElemTo(fragment, text, 'text letter letter_' + text.toLowerCase())
    })

    const linesContainer = document.createElement('div')
    linesContainer.className = 'navigator__lines'
    this._addElemTo(linesContainer, null, 'vertical-line')
    this._addElemTo(linesContainer, null, 'horizontal-line')

    const rotatedLinesContainer = linesContainer.cloneNode(true)
    rotatedLinesContainer.className += ' navigator_rotated'

    fragment.appendChild(linesContainer)
    fragment.appendChild(rotatedLinesContainer)

    container.appendChild(fragment)
  }

  createScannerText (container) {
    this._addElemTo(container, 'SCAN MODE 03958D', 'text')
    this._addElemTo(container, 'ACCURACY 87-99%', 'text')
    this._addElemTo(container, 'IN PROGRESS...', 'text')
  }

  createNavigatorText(container) {
    this._addElemTo(container, 'TARGET FIELD:', 'text')
    this._addElemTo(container, '**************', 'text');

    const randXCoord = `${this._getRandDigits(2)}.${this._getRandDigits(6)}`
    const randYCoord = `${this._getRandDigits(2)}.${this._getRandDigits(6)}`
    this._addElemTo(container, randXCoord, 'text');
    this._addElemTo(container, randYCoord, 'text');
  }

  _addElemTo (container, text, className) {
    const elem = document.createElement('div')
    text ? (elem.innerText = text) : null
    className ? (elem.className = className) : null
    container.appendChild(elem)
  }

  _getRandWord () {
    const WORDS = [ 'ARM-REST', 'CATERPILLAR', 'CORSAGE', 'ELLIPSE', 'FINISH',
      'FORMAT', 'HIP', 'MATE', 'NEWSPRINT', 'PROCESS', 'ANGER', 'BAKEWARE',
      'FUNERAL', 'GUN', 'KETTLE', 'LIGHTNING', 'SERIES', 'STEAM', 'VALANCE', 'WITNESS'
    ]

    return WORDS[Math.floor(Math.random() * WORDS.length)]
  }

  _getRandDigits (digitsCount) {
    let strDigit = ''

    while (digitsCount--) {
      strDigit += Math.floor(Math.random() * 10);
    }

    return strDigit;
  }
}

export default T800Interface;
