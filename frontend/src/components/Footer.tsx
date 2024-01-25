import React from "react";
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
    let year = new Date().getFullYear();

    return (
        <>
            <AppBar sx={{
                position: 'absolute',
                backgroundColor: "#2B6048",
                bottom: 0,
                height: '50px',
                justifyContent: 'center',
                top: 'auto'
            }}>
                <Toolbar disableGutters sx={{ justifyContent: 'center', minHeight: '50px !important'}}>
                    <Typography variant="h6" sx={{ color: 'white' }}>EkoSpoj {year}</Typography>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Footer;