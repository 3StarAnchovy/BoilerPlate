const express = require('express') //express 모듈을 가져옴
const app = express()
const port = 3000

const mongoose = require('mongoose')
const key = require('./key.json')
const URL = key.db.URL

//db connect
mongoose.connect(URL).then(() => console.log('mongoDB connected ... '))
    .catch((e) => console.log('mongoDB error', e))


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})