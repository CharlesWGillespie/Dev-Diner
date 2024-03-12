import React from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Footer from '../components/Footer';

export default function CartPage({ cartItems }) {
  console.log("Received cart items:", cartItems);
  return (
    <>
      <NavBar />
      <Container>
        <h1>Cart</h1>
        {/* Render cart items if cartItems is defined and is an array */}
        {cartItems && Array.isArray(cartItems) && cartItems.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
        ))}
        <Footer />
      </Container>
    </>
  );
}
