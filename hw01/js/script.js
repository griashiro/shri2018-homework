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
  addTitle(card, cardData.title, cardData.titleColor)

  if (cardData.image) {
    addImage(card, cardData.image, cardData.size)
  } else {
    markAsNoImage(card)
  }

  addAdditionalContent(card, cardData)

  return card
}

const addAdditionalContent = (card, cardData) => {
  const div = createBlock('card__additional-content')

  if (cardData.description) {
    addDescription(div, cardData.description)
  }

  addPane(div, cardData)

  card.appendChild(div)
}

const addPane = (elem, cardData) => {
  const pane = createBlock('card__pane')

  if (cardData.channelName) {
    addChannel(pane, cardData.channelName)
  }

  addButtons(pane)

  elem.appendChild(pane)
}

const addButtons = (elem) => {
  elem.appendChild(
    createBlock('card__dots', '<svg><use xlink:href="#s-dots"/></svg>'))

  elem.appendChild(
    createBlock('card__heart', '<svg><use xlink:href="#s-heart"/></svg>'))
}

const addTitle = (elem, title, titleColor) => {
  const titleElem = createBlock('card__title', title)
  titleElem.style.color = titleColor;

  const div = createBlock('card__title-container')
  div.appendChild(titleElem)
  
  elem.appendChild(div)
}

const addImage = (elem, src, imageSize) => {
  const div = createBlock('card__picture')
  div.appendChild(createPicture(src, imageSize))
  elem.appendChild(div)
}

const addDescription = (elem, description) => {
  const gradient = '<div class="card__gradient"></div>'
  elem.appendChild(createBlock('card__description', gradient + description))
}

const addChannel = (elem, channelName) => {
  elem.appendChild(createBlock('card__channel', channelName))
}

const markAsNoImage = (elem) => {
  elem.className += ' card_no-image'
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
  img.sizes = '(max-width: 650px) 50vw, 100vw';

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
