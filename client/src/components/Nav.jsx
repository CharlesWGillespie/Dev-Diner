import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';

export default function NavBar() {
    return (
        <AppBar>
            <Toolbar sx={{
                backgroundColor: '#ff66a3', // Pink background color
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
            }}>
                <Typography variant='h2' component='div' style={{ textStroke: '1px black', padding: '10px' }}>
                    Dev Diner
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Link to="/home" style={{ color: 'white', textDecoration: 'none', fontSize: '25px', marginRight: '20px' }}>Home</Link>
                    <Link to="/menu" style={{ color: 'white', textDecoration: 'none', fontSize: '25px', marginRight: '20px' }}>Menu</Link>
                    <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Cart</Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
