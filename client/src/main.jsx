import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import SignUp from './pages/SignUpPage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CartPage from './pages/CartPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', // Match the root URL
        element: <LoginPage /> // Render LoginPage component
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/menu',
        element: <MenuPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
