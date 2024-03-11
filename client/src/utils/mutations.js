import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation UpdateUser($id: String!, $firstName: String, $lastName: String, $email: String, $phoneNumber: String, $role: [String]) {
  updateUser(_id: $id, firstName: $firstName, lastName: $lastName, email: $email, phoneNumber: $phoneNumber, role: $role) {
    _id
    role
  }
}
`

export const ADD_CATEGORY = gql`
mutation Mutation($categoryName: String!) {
  addCategory(categoryName: $categoryName) {
    _id
    categoryName
  }
}
`

export const UPDATE_CATEGORY = gql`
mutation UpdateUser($categoryId: ID!, $categoryName: String) {
  updateCategory(categoryId: $categoryId, categoryName: $categoryName) {
    _id
    categoryName
  }
}
`

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;