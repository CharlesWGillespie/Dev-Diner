const typeDefs = `#graphql

type User{
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    phoneNumber: String
    role: [String]
    #["admin"]
}
type Category{
    _id: String
    categoryName: String
}
type menuItem{
    _id: String
    foodName: String
    categoryId: String
    description: String
    price: Float
    foodPicture: String
}
type Order{
    _id: ID
    user_id: ID
    order_items: [menuItem]
    order_total: Float
}
type Auth{
    token: ID
    user: User
}

type Query{
    users: [User]
    categories: [Category]
    menuItems: [menuItem]
    orders: [Order]
}

type Mutation{
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String):Auth
    updateUser(_id: String!, firstName: String, lastName: String, email: String, phoneNumber: String, role: [String]):User
    login(email: String!, password: String!):Auth
    addCategory(categoryName: String!): Category
    updateCategory(categoryId: ID!, categoryName: String):Category
    deleteCategory(categoryId: ID!):Category
    addMenuItem(foodName: String!, categoryId: String!, description: String, price: Float, foodPicture: String): menuItem
    updateMenuItem(_id: String!, foodName: String, description: String, price: Float, foodPicture: String): menuItem
    deleteMenuItem(_id: ID!):menuItem

}
`

module.exports = typeDefs