const bodyParser = require('body-parser')
const express = require('express') //express 모듈을 가져옴
const app = express()
const port = 3000


const mongoose = require('mongoose')
const key = require('./key.json')
const URL = key.db.URL


const { User } = require('./models/User')


// const bodyParser = require('body-parser')
app.use(express.urlencoded({ extended: true })) //application/x-www-form-urlencoded
app.use(express.json()) //aplication/json

//db connect
mongoose.connect(URL).then(() => console.log('mongoDB connected ... '))
    .catch((e) => console.log('mongoDB error', e))


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.post('/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err)
            return (res.json({ success: false, err }))
        return (res.status(200).json({ success: true }))

    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})