import React from 'react';
import NavBar from "../components/Nav";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <img src="/food-img/DevDiner.png" alt="Dev Diner Logo" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>

          <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
            <div>
              <h1>Welcome to Dev Diner</h1>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src="/food-img/DevDinerInside.png" alt="Second Image" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
