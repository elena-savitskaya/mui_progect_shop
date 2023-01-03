
import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography, Badge } from '@mui/material'
import React from 'react'

function Header({ handleCart, orderLen }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}
                >
                    Material UI Workshop
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <Badge
                        color="secondary"
                        badgeContent={orderLen}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header