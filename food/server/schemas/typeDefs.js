const typeDefs = `#graphql

type User{
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    phoneNumber: String
    role: [String]
}
type menuItem{
    name: String
    category: String
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
    menuItems: [menuItem]
    orders: [Order]
}

type Mutation{
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String):User
    login(email: String!, password: String!):Auth
}
`

module.exports = typeDefs