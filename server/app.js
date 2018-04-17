const path = require('path')
const device = require('device')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const desktop = path.join(__dirname, '../build/desktop.html')
const touch = path.join(__dirname, '../build/touch.html')

app.get('/', (req, res) => {
  const deviceType = device(req.get('User-Agent')).type

  if (deviceType === 'desktop') {
    console.log('desktop');
    res.sendFile(desktop)
    return
  }

  console.log('mobile');
  res.sendFile(touch)
})

app.use(express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => {
  res.status(404).send('404')
});

app.use((err, req, res, next) => {
  res.status(500).send('500')
});

app.listen(PORT, () => {
  console.log('App listen on ' + PORT);
})
