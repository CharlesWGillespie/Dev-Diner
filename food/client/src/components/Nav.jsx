import React from 'react';
import { Link } from 'react-router-dom';
// MUI Components
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Stack
    
} from '@mui/material';

export default function NavBar() {
    return (
        <AppBar>
            <Toolbar sx={{
                backgroundColor: 'grey',
                display: 'flex',
                justifyContent: 'space-between', // Aligns items on the left and right sides
                alignItems: 'center', // Centers items vertically
                padding: '0 20px', // Add padding to center the links a little
            }}>
                <Typography variant='h2' component='div'>
                    FOOD
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '25px', marginRight: '40px' }}>Home</Link>
                    <Link to="/menu" style={{ color: 'white', textDecoration: 'none', fontSize: '25px', marginRight: '40px' }}>Menu</Link>
                    <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '25px', marginRight: '40px' }}>Contact</Link>
                    <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '25px', marginRight: '50px' }}>Cart</Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
