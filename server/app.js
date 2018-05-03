const path = require('path')
const device = require('device')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  const deviceType = device(req.get('User-Agent')).type === 'desktop' ?
    'desktop' : 'touch'

  console.log(deviceType);
  res.sendFile(path.join(__dirname, '..', 'build', deviceType + '.html'));
})

app.use(express.static(path.join(__dirname, '..', 'build')))

app.get('*', (req, res) => {
  res.status(404).send('404')
});

app.use((err, req, res, next) => {
  res.status(500).send('500')
});

app.listen(PORT, () => {
  console.log('App listen on ' + PORT);
})
