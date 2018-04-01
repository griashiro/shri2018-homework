import Store from './shridux'
import * as types from './actionTypes'
import { status, message, valid } from './reducers'
import { setSendingStatus, setSendStatus,
  setMessage, setValid, setInvalid } from './actions'
import { writeToLog, clearLog } from './logger'

const store = new Store(status, message, valid)

const getState = () => {
  const state = store.getState()
  writeToLog('Состояние ' + JSON.stringify(state, null, 1))
  return state
}

const dispatch = (action: Action) => {
  writeToLog('Произошло событие ' + action.type)
  store.dispatch(action)
}

const subscribe = (listener: Function) => {
  store.subscribe(() => {
    writeToLog('Вызван обработчик ' + listener.name)
    listener()
  })
}

const input: HTMLInputElement = document.querySelector('.view-stub__input')
const button: HTMLButtonElement = document.querySelector('.view-stub__apply')
const label: HTMLParagraphElement = document.querySelector('.view-stub__label')

const sendListener = () => {
  const state = getState()

  if (state.isSending) {
    button.classList.add('view-stub_animate-progress')
  } else {
    button.classList.remove('view-stub_animate-progress')
  }
}

const messageListener = () => {
  const state = getState()

  label.textContent = state.message
}

const validListener = () => {
  const state = getState()

  if (state.isValid) {
    label.classList.add('view-stub_valid')
  } else {
    label.classList.remove('view-stub_valid')
  }
}

subscribe(sendListener)
subscribe(messageListener)
subscribe(validListener)

const sendToServer = () => {
  clearLog()
  dispatch(setSendingStatus())

  const fetch: any = new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = input.value
      const withoutDigits = /^([^0-9]*)$/
      const isValid = withoutDigits.test(message)

      resolve({ message, isValid })
    }, 1000)
  })

  fetch.then(({ message, isValid }: { message: string, isValid: boolean }) => {
    dispatch(setSendStatus())
    dispatch(setMessage(message.toUpperCase()))
    isValid ? dispatch(setValid()) : dispatch(setInvalid())
  })
}

button.addEventListener('click', () => {
  sendToServer()
})
