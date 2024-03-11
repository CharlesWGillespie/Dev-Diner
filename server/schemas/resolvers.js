const { User, Order, menuItem, Category } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({})
        },
        categories: async () => {
            return await Category.find({})
        },
        menuItems: async () => {
            return await menuItem.find({})
        }
    },
    Mutation: {
        updateUser: async( parent, {_id, role, firstName, lastName, email, phoneNumber}) => {
            const newUserObject = await User.findOneAndUpdate(
                {_id},
                {
                    firstName: firstName,
                    lastName: lastName, 
                    email: email,
                    phoneNumber: phoneNumber,
                    role: role
                },
                {new: true}
            ) 
            return{_id: newUserObject._id, role: newUserObject.role}
        },
        updateMenuItem: async (parent, { _id, foodName, description, price, foodPicture }) => {
            const newMenuItem = await menuItem.findOneAndUpdate(
                { _id },
                {
                    foodName: foodName,
                    description: description,
                    price: price,
                    foodPicture: foodPicture
                },
                { new: true })
            return {
                _id: newMenuItem._id.toString(),
                foodName: newMenuItem.foodName,
                categoryId: newMenuItem.categoryId,
                description: newMenuItem.description,
                price: newMenuItem.price,
                foodPicture: newMenuItem.foodPicture
            }
        },
        addMenuItem: async (parent, { foodName, categoryId, description, price, foodPicture }) => {
            const newMenuItem = await menuItem.create({
                foodName: foodName,
                categoryId: categoryId,
                description: description,
                price: price,
                foodPicture: foodPicture
            })
            return {
                _id: newMenuItem._id.toString(),
                foodName: newMenuItem.foodName,
                categoryId: newMenuItem.categoryId,
                description: newMenuItem.description,
                price: newMenuItem.price,
                foodPicture: newMenuItem.foodPicture
            }
        },
        deleteCategory: async (parent, { categoryId }) => {
            const category = await Category.deleteOne({
                _id: categoryId
            })
            return { category }
        },
        updateCategory: async (parent, { categoryId, categoryName }) => {
            try {
                const category = await Category.findOneAndUpdate(
                    { _id: categoryId },
                    { categoryName: categoryName },
                    { new: true })
                return { _id: category._id.toString(), categoryName: category.categoryName }
            }
            catch (err) {
                console.log(err)
            }
        },
        addCategory: async (parent, { categoryName }) => {
            const category = await Category.create({ categoryName })
            console.log(category)
            return { _id: category._id.toString(), categoryName: category.categoryName }
        },
        addUser: async (parent, { firstName, lastName, email, password, phoneNumber }) => {
            const user = await User.create({ firstName, lastName, email, password, phoneNumber })
            console.log(user)
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