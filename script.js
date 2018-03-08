const DATA_URL = 'data.json'

fetch(DATA_URL)
  .then((res) => {
    res.json().then((data) => renderMockData(data))
  })
  .catch((err) => alert('Не удалось загрузить data.json\n' + err))

const renderMockData = (dataJSON) => {
  document.body.appendChild(createDocumentFragment(dataJSON))
}

const createDocumentFragment = (dataJSON) => {
  const fragment = document.createDocumentFragment()

  dataJSON.map((item) => {
    fragment.appendChild(createCard(item))
  })

  return fragment
}

const createCard = (item) => {
  const card = createBlock(`card card_size_${item.size}`)
  card.appendChild(createBlock('card__title', item.title))

  if (item.image) {
    card.appendChild(createPictureBlock('card__picture', item.image))
  } else {
    card.appendChild(createBlock('card__description', item.description))
  }

  // TODO: Добавить контейнер для кнопок и кнопки

  return card
}

const createBlock = (className, text = '') => {
  const div = document.createElement('div')
  div.className = className
  div.innerHTML = text
  return div
}

const createPictureBlock = (className, src) => {
  const img = document.createElement('img')
  img.src = src
  img.alt = 'Изображение для карточки'

  return createBlock(className).appendChild(img)
}
