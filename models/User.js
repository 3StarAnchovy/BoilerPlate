const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRound = 10

//bcrypt
//salt를 먼저 생성
//생선된 salt로 비밀번호 암호화

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

//save하기 전에 콜백함수 먼저 호출
userSchema.pre('save', function (next) {
    var user = this //User를 가리킴 //에로우 함수는 this를 바인딩하지 못한다.\
    if (user.isModified('password')) {
        bcrypt.genSalt(saltRound, function (err, salt) {
            if (err)
                return (next(err))
            bcrypt.hash(user.password, salt, function (err, hash) {
                //hash = 암호화된 비밀번호
                if (err)
                    return (next(err))
                user.password = hash // 암호화된 비밀번호로 교체
                next()
            })
        })
    }
})

//Schema를 Model로 감싸줌
const User = mongoose.model('User', userSchema)


//외부에서도 끌어쓸수 있도록 모듈화
module.exports = { User }