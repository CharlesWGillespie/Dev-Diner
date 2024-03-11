const { Schema, model } = require('mongoose')

const menuItemSchema = new Schema({
    foodName: {
        type: String,
        required: true,
        trim: true
    },
    categoryId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    foodPicture: {
        type: String
    }
})

const menuItem = model('menuItem', menuItemSchema)

module.exports = menuItem