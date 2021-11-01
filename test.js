const express = require('express');
const app = express();
const port = 5000

const mongoose = require('mongoose')
const URL = 'mongodb+srv://jimin:ghd0929@test.bvvrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URL).then(() => console.log('connected ... '))
    .catch((e) => console.log('error', e))
//루트 디렉터리
app.get('/', (req, res) => res.send("this is test"))
app.listen(port, () => console.log('example port = ${port}!'));