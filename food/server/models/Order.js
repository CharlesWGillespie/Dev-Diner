const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    order_items: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    order_total: {
        type: Number
    },
})

const Order = model('Order', OrderSchema)

module.exports = Order