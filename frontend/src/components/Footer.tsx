import React from "react";
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
    let year = new Date().getFullYear();

    return (
        <>
            <AppBar sx={{
                position: 'absolute',
                backgroundColor: "white",
                bottom: 0,
                height: '45px',
                justifyContent: 'center',
                top: 'auto'
            }}>
                <Toolbar disableGutters sx={{ justifyContent: 'center', minHeight: '45px !important'}}>
                    <Typography sx={{ color: '#2B6048', fontSize: '1.2rem' }}>EkoSpoj {year}</Typography>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Footer;