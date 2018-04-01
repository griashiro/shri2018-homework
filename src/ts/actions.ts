import * as types from './actionTypes'

const setSendingStatus = () => ({
   type: types.SENDING
})

const setSendStatus = () => ({
   type: types.SEND
})

const setMessage = (message: string) => ({
   type: types.MESSAGE, payload: message
})

const setValid = () => ({
   type: types.VALID
})

const setInvalid = () => ({
   type: types.INVALID
})

export { setSendingStatus, setSendStatus, setMessage, setValid, setInvalid }
