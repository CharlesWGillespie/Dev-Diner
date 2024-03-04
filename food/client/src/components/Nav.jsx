import React from 'react';
// MUI Components
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Stack, 
    Link
} from '@mui/material';

export default function NavBar() {
    return (
        <AppBar>
            <Toolbar sx={{
                backgroundColor: 'grey',
            }}>
                <Typography variant='h5' component='div' sx={{
                    flexGrow: 1,
                    textAlign: 'start',
                    
                    }}>
                    FOOD
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Link to="/home" color='inherit'>Home</Link>
                    <Link to="/menu" color='inherit'>Menu</Link>
                    <Link to="/contact" color='inherit'>Contact</Link>
                    <Link to="/cart" color='inherit'>Cart</Link>
                    </Stack>
            </Toolbar>
        </AppBar>
    )
}