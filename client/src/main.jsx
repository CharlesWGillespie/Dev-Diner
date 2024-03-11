import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import SignUp from './pages/SignUpPage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import CartPage from './pages/CartPage.jsx';
import './index.css'

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
        path: '/cart',
        element: <CartPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.createRoot
  <RouterProvider router={router} />
);
