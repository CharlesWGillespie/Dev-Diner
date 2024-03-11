import React from 'react';
import { Typography, Container } from '@mui/material';

export default function Footer() {
  return (
    <footer>
      <Container>
      </Container>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center">
          To place an order over the phone, please call: <a href="tel:+12031231234">+1 (203) 123-1234</a>
        </Typography>
      </Container>
    </footer>
  );
}
