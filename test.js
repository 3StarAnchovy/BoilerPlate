const express = require('express');
const app = express();
const port = 3000

// DB 
const mongoose = require('mongoose')
const URL = require('./key.json').db.URL
mongoose.connect(URL).then(() => console.log('connected ... '))
    .catch((e) => console.log('error', e))

const { User } = require('./models/User')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//루트 디렉터리
//app.get('/', (req, res) => res.send("this is test"))

app.post('/register', (req, res) => {
    const user = new User(req.body)
    console.log(req.body)
    user.save((err, doc) => {
        if (err)
            return (res.json({ success: false, err }))
        return (res.status(200).json({ success: true }))
    })
})
app.listen(port, () => console.log('example port = ${port}'));