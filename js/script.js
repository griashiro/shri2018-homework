const DATA_URL = 'data.json'

fetch(DATA_URL)
  .then((res) => {
    res.json().then((data) => renderMockData(data))
  })
  .catch((err) => alert('Не удалось загрузить data.json\n' + err))

const renderMockData = (dataJSON) => {
  const main = document.getElementById('main')
  main.appendChild(createDocumentFragment(dataJSON))
}

const createDocumentFragment = (dataJSON) => {
  const fragment = document.createDocumentFragment()

  dataJSON.map((cardData) => {
    fragment.appendChild(createCard(cardData))
  })

  return fragment
}

const createCard = (cardData) => {
  const card = createBlock(`card card_size_${cardData.size}`)
  addTitle(card, cardData)

  if (cardData.image) {
    addImage(card, cardData)
  } else {
    markAsNoImage(card)
  }

  if (cardData.description) {
    addDescription(card, cardData)
  }

  // TODO: Добавить контейнер для кнопок и кнопки

  return card
}

const addTitle = (card, cardData) => {
  const div = createBlock('card__title-container')
  div.appendChild(createBlock('card__title', cardData.title))
  card.appendChild(div)
}

const addImage = (card, cardData) => {
  const div = createBlock('card__picture')
  div.appendChild(createPicture(cardData.image, cardData.size))
  card.appendChild(div)
}

const addDescription = (card, cardData) => {
  card.appendChild(createBlock('card__description', cardData.description))
}

const markAsNoImage = (card) => {
  card.className += ' card_no-image'
}

const createBlock = (className, text = '') => {
  const div = document.createElement('div')

  div.className = className
  div.innerHTML = text

  return div
}

const createPicture = (src, size) => {
  const img = document.createElement('img')

  img.src = src
  img.srcset = getSrcSet(src, size)

  // TODO: добавить рассчет sizes

  img.alt = 'Изображение для карточки'

  return img
}

const IMAGE_SIZES = {
  s: [112, 224, 336],
  m: [172, 344, 516],
  l: [232, 464, 696]
}

const getSrcSet = (src, size) => {
  src = src.split('.')

  const file = src[0]
  const extension = src[1]

  const imgSize = IMAGE_SIZES[size]

  return `
    ${file}.${extension} ${imgSize[0]}w,
    ${file}@2x.${extension} ${imgSize[1]}w,
    ${file}@3x.${extension} ${imgSize[2]}w
  `.replace('\n', '')
}
