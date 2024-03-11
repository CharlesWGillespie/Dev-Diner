import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Container style={{ fontFamily: 'Roboto' }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <img src="/food-img/DevDiner.png" alt="Dev Diner Logo" style={{ width: '100%', objectFit: 'cover' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ color: '#ff1a75' }}>Welcome to Dev Diner</h1>
              <p style={{ fontSize: '1.2rem' }}>Discover a world of delicious dishes crafted with love and technology.</p>
              <Link to="/menu" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                  Explore Our Menu
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '50px' }}>
          <Grid item xs={12} sm={4}>
            <h2>Our Story</h2>
            <p>Learn more about how Dev Diner started and our journey to blend technology with food.</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2>Special Offers</h2>
            <p>Check out our latest specials and promotions to enjoy delicious meals at great prices.</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2>Contact Us</h2>
            <p>Have questions or feedback? Contact us today and let us know how we can assist you.</p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
