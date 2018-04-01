import * as types from './actionTypes'

const status = (action: Action, state: Object = { isSending: false }) => {
  switch (action.type) {
    case types.SENDING: {
      return {
        ...state,
        isSending: true
      }
    }
    case types.SEND: {
      return {
        ...state,
        isSending: false
      }
    }
    default: {
      return state
    }
  }
}

const message = (action: Action, state: Object = { message: '' }) => {
  switch (action.type) {
    case types.MESSAGE: {
      return {
        ...state,
        message: action.payload
      }
    }
    default: {
      return state
    }
  }
}

const valid = (action: Action, state: Object = { isValid: false }) => {
  switch (action.type) {
    case types.VALID: {
      return {
        ...state,
        isValid: true
      }
    }
    case types.INVALID: {
      return {
        ...state,
        isValid: false
      }
    }
    default: {
      return state
    }
  }
}

export { status, message, valid }
