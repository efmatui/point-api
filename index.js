const express = require('express')
const app = express()
const port = 3000
const point = require('./routes/point')

app.use('/point', point)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))