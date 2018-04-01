const clearLog = () => {
  const log: HTMLDivElement = document.querySelector('.log')
  log.innerHTML = ''
}

const writeToLog = (message: string) => {
  const log: HTMLDivElement = document.querySelector('.log')
  const elem = document.createElement('p')
  elem.textContent = message
  log.appendChild(elem)
}

export { writeToLog, clearLog }
