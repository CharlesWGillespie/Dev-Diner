import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';

export default function NavBar() {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    FOOD
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Menu</Button>
                    <Button color='inherit'>Contact</Button>
                    <Button color='inherit'>Cart</Button>
                    </Stack>
            </Toolbar>
        </AppBar>
    )
}