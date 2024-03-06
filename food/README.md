# User Story:

As a restaurant owner, I want to manage my restaurant's app efficiently, allowing users to customize their experience and interact seamlessly with our menu, so that I can enhance customer satisfaction and streamline operations.

# Acceptance Criteria:

## User Authentication:

Users can sign up for an account.
Users can log in using their credentials.
Users can log out securely.

## Menu Management:

Users can add, edit, or remove menu items.
Users can update prices for existing menu items.
Users can update pictures associated with menu items.

## Operating Hours Management:

Users can update the operating hours of the restaurant.
Operating hours should be displayed accurately to the users.
## Shopping Cart Functionality:

Users can add items to their shopping cart.
Users can update quantities or remove items from their cart.
Prices in the shopping cart should reflect the total cost of selected items.

## User Experience:

The app should provide a seamless and intuitive user experience.
User interactions should be smooth and responsive.
Error messages should be clear and informative.

## Technology Stack:

The app should be developed using React for the frontend.
Express and Node.js should be used for the backend.
Mongoose should be utilized for interacting with the database.
GraphQL should be implemented for efficient data querying.

## Security:

User authentication should be implemented securely.
Inputs should be validated to prevent injection attacks and data corruption.
Passwords should be securely hashed and stored.

## Scalability and Performance:

The application should be scalable to handle a large number of concurrent users.
Performance optimizations should be implemented where necessary.

## Documentation:

Comprehensive documentation should be provided for developers and users.
README.md file should contain clear instructions for installation and usage.
API documentation should be provided for backend endpoints.

## Testing:

Unit tests should be written for critical functionalities.
Integration tests should be conducted to ensure smooth interaction between components.
End-to-end testing should be performed to validate user workflows.


client/
  public/
    food-img/
      'all of my images'
  src/
    components/
      Menu-Item.jsx
      Nav.jsx
    pages/
      HomePage.jsx
      CartPage.jsx
      LoginPage.jsx
      SignupPage.jsx
      MenuPage.jsx
    utils/
      actions.js
      GlobalState.js
      helpers.js
      mutations.js
      reducers.js
      queries.js
server/
  models/
    Category.js
    index.js
    menuItem.js
    Order.js
    User.js
  Schemas/
    index.js
    resolvers.js
    typeDefs.js
  seeders/
    cleanDB.js
    menuSeeds.json
    seed.js
    userSeeds.json
  utils/
    auth.js
