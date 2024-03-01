const { Schema, model } = require('mongoose')

const menuItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
        
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    food_picture: {
        type: String
    }
})

const menuItem = model('menuItem', menuItemSchema)

module.exports = menuItem