

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
    categoryName: String
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
    login(email: String!, password: String!):Auth
    addCategory(categoryName: String!): Category
    addMenuItem(food_name: String!, category: String!): menuItem
}
`

module.exports = typeDefs