const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String
    },
    role: [{
        type: String,
    }]
})

userSchema.pre('save', async function(next){
    if(this.isNew || this.isModified('password')){
        const saltRounds = 10
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next()
})

userSchema.methods.checkPassword = async function(inputPassword){
    return bcrypt.compare(inputPassword, this.password)
}

const User = model('User', userSchema)

module.exports = User