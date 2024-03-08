const { User, Order, menuItem, Category } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({})
        },
        categories: async () => {
            return await Category.find({})
        }
    },
    Mutation: {
        // deleteCategory:
        // updateCategoryName:
        addCategory: async (parent, { categoryName }) => {
            const category = await Category.create({ categoryName }, )
            return { category }
        },
        addUser: async (parent, { firstName, lastName, email, password, phoneNumber }) => {
            const user = await User.create({ firstName, lastName, email, password, phoneNumber })
            const token = signToken(user)
            return { user, token }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw AuthenticationError
            }

            const PWCorrect = await user.checkPassword(password)

            if (!PWCorrect) {
                throw AuthenticationError
            }
            const token = signToken(user)
            return { token, user }
        }
    }
}

module.exports = resolvers