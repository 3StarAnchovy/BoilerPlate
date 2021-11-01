const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:
    {
        type: String,
        maxlength: 50
    },
    email:
    {
        type: String,
        trim: true, // 공백제거
        unique: 1
    },
    password:
    {
        type: String,
        maxlength: 50
    },
    role:
    {
        type: Number,
        // number가 1이면 관리자
        // 0이면 일반
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//Schema를 Model로 감싸줌
const User = mongoose.model('User', userSchema)


//외부에서도 끌어쓸수 있도록 모듈화
module.exports = { User }