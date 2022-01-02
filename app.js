const express = require('express')

const app = express();

app.get('/js', (req, res) => {
      res.sendFile(path.join(__dirname, './public/main.js'))
    })
    
app.use('/js', express.static(path.join(__dirname, 'public/main.js')))
    