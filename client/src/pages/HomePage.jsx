import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Container>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img src="/food-img/DevDiner.png" alt="Dev Diner Logo" style={{ width: '160%', objectFit: 'cover', marginLeft: '-60%', marginTop: '-210px' }} />
          </Grid>
          <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img src="/food-img/DevDinerInside.png" alt="Second Image" style={{ width: '160%', objectFit: 'cover', marginRight: '-60%', marginTop: '-210px' }} />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center', marginTop:'-500px' }}>
            <div className="glowing-text" style={{ fontSize: '30px', color: '#ff1a75' }}>
              <h1>Welcome to Dev Diner</h1>
            </div>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center', fontSize: '30px' }}>
            <div>
              <p>The Perfect Blend of Code and Cuisine</p>
            </div>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/menu" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                Order Now
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
