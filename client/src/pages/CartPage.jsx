import React, { useState } from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Footer from '../components/Footer';
import { useStoreContext } from '../utils/GlobalState';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CartPage() {
  const [state, dispatch] = useStoreContext();
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate subtotal
  const subtotal = state.cart.reduce((acc, item) => acc + item.price, 0);

  // Calculate tax (7.35%)
  const taxRate = 0.0735;
  const tax = subtotal * taxRate;

  // Calculate total
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    // Place order logic goes here (if needed)
    setOrderPlaced(true);
    // Optionally, you can clear the cart after placing the order
    // dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <>
      <NavBar />
      <Container>
        <Box textAlign="center">
          <Typography variant="h2" gutterBottom>
            Cart
          </Typography>
          {state.cart && Array.isArray(state.cart) && state.cart.map((item, index) => (
            <React.Fragment key={index}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5">{item.name}</Typography>
                <Box borderLeft="1px solid white" height="auto" flex="0 0 auto" />
                <Typography variant="h5">${item.price}</Typography>
              </Box>
            </React.Fragment>
          ))}
          <Box mt={3} display="flex" justifyContent="space-between">
            <Typography variant="h6">Subtotal:</Typography>
            <Typography variant="h6">${subtotal.toFixed(2)}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Tax (7.35%):</Typography>
            <Typography variant="h6">${tax.toFixed(2)}</Typography>
          </Box>
          <Box mt={1} display="flex" justifyContent="space-between">
            <Typography variant="h4">Total:</Typography>
            <Typography variant="h4">${total.toFixed(2)}</Typography>
          </Box>
          {!orderPlaced && (
            <Button variant="contained" color="primary" onClick={handlePlaceOrder} style={{ marginTop: '20px' }}>
              Place Order
            </Button>
          )}
          {orderPlaced && (
            <React.Fragment>
              <Typography variant="h5" color="white" style={{ marginTop: '20px' }}>
                Your order has been placed!
              </Typography>
              <Typography variant="h5" color="white">
                Your order will be ready for pickup in 20-30 minutes.
              </Typography>
            </React.Fragment>
          )}
        </Box>
        <Footer />
      </Container>
    </>
  );
}
