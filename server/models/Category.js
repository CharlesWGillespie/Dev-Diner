const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
    // _id: Schema.Types.ObjectId,
    categoryName: {
        type: String,
        required: true,
        trim: true
    }
})

const Category = model('Category', categorySchema)
module.exports = Category