const { User, Order, menuItem, Category } = require('../models')

const resolvers = {
Query: {
    users: async() => {
        return User.find()
    }
},
Mutation: {
    addUser: async(parent, {firstName, lastName, email, password, phoneNumber}) => {
        const user = await User.create({firstName, lastName, email, password, phoneNumber})
        // const token = signToken(user)
        return{user}
    }
}
}