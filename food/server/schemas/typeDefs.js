

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
    _id: ID
    category_name: String
}
type menuItem{
    _id: ID
    food_name: String
    category: Category
    description: String
    price: Float
    food_picture: String
}
type Order{
    _id: ID
    user_id: ID
    order_items: [menuItem]
    order_total: Float
}

type Query{
    users: [User]
    categories: [Category]
    menuItems: [menuItem]
    orders: [Order]
}

type Mutation{
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String):User
    login(email: String!, password: String!):Auth
    addCategory(name: )
    addMenuItem(name: String!, category: String!): menuItem
}
`

module.exports = typeDefs