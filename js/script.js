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

  if (isNoImageCard(cardData)) {
    card.className += ' card_no-image'
  }

  const div = createBlock('card__title-container')
  div.appendChild(createBlock('card__title', cardData.title))

  card.appendChild(div)

    if (cardData.image) {
    const div = createBlock('card__picture')
    div.appendChild(createPicture(cardData.image))

    card.appendChild(div)
  }

  if (cardData.description) {
    card.appendChild(createBlock('card__description', cardData.description))
  }

  // TODO: Добавить контейнер для кнопок и кнопки

  return card
}

const isNoImageCard = (cardData) => {
  return cardData.description && !cardData.image
}

const createBlock = (className, text = '') => {
  const div = document.createElement('div')
  div.className = className
  div.innerHTML = text
  return div
}

const createPicture = (src) => {
  const img = document.createElement('img')
  img.src = src
  img.srcset = getSrcSet(src)
  img.alt = 'Изображение для карточки'

  return img
}

const getSrcSet = (src) => {
  src = src.split('.')
  const fileName = src[0]
  const extension = src[1]
  return `${fileName}@2x.${extension} 2x, ${fileName}@3x.${extension} 3x`
}
