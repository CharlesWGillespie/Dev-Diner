import React from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center">
          To place an order over the phone, please call: <a href="tel:+12031231234">+1 (203) 123-1234</a>
        </Typography>
      </Container>
    </>
  );
}
