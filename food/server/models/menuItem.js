const { Schema, model } = require('mongoose')

const menuItemSchema = new Schema({
    food_name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
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