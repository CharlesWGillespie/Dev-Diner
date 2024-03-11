import { gql } from '@apollo/client';


export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      categoryName
    }
  }
`;

export const QUERY_MENUITEMS = gql`
{
  menuItems {
    _id
    categoryId
    description
    foodName
    foodPicture
    price
  }
}
`

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
