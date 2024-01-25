import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Box, useMediaQuery, IconButton, MenuItem, Menu } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState<null | HTMLElement>(null);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setIsMenuOpen(event.currentTarget)
    };
    const handleMenuClose = () => setIsMenuOpen(null);

    useEffect(() => {
        if (!isSmallScreen) {
            setIsMenuOpen(null);
        }
    }, [isSmallScreen]);

    const handleButtonClick = () => {
        navigate('/');
    };
    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <AppBar sx={{ backgroundColor: "white" }}>
            <Box ml={5} mr={5}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Button onClick={handleButtonClick} sx={{
                        color: "#2B6048",
                        "&:hover": {
                            backgroundColor: "white",
                        }
                    }}>
                        <Typography variant="h4" sx={{ flexGrow: 1, color: "#2B6048" }}>
                            EkoSpoj
                        </Typography>
                    </Button>
                    {isSmallScreen ? (
                            <>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        aria-label="menu"
                                        onClick={handleMenuOpen}
                                    >
                                        <MenuIcon/>
                                    </IconButton>
                                <Menu
                                    id="navbar-menu"
                                    anchorEl={isMenuOpen}
                                    open={Boolean(isMenuOpen)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem>
                                        <Button onClick={handleContactClick}
                                                sx={{
                                                    color: "#2B6048",
                                                    "&:hover": {
                                                        backgroundColor: "#83C089",
                                                        color: "white"
                                                    }
                                                }}
                                        >
                                            <Typography variant="subtitle1" display="block">
                                                Kontakt
                                            </Typography>
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button onClick={handleButtonClick}
                                                sx={{
                                                    color: "#2B6048",
                                                    "&:hover": {
                                                        backgroundColor: "#83C089",
                                                        color: "white"
                                                    }
                                                }}
                                        >
                                            <Typography variant="subtitle1" display="block">
                                                Rozcestník
                                            </Typography>
                                        </Button>
                                    </MenuItem>
                                </Menu>
                            </>
                        )
                        : (
                            <div>
                                <Button onClick={handleContactClick}
                                        sx={{
                                            color: "#2B6048",
                                            "&:hover": {
                                                backgroundColor: "#83C089",
                                                color: "white"
                                            }
                                        }}
                                >
                                    <Typography variant="subtitle1" display="block">
                                        Kontakt
                                    </Typography>
                                </Button>
                                <Button onClick={handleButtonClick}
                                        sx={{
                                            color: "#2B6048",
                                            "&:hover": {
                                                backgroundColor: "#83C089",
                                                color: "white"
                                            }
                                        }}
                                >
                                    <Typography variant="subtitle1" display="block">
                                        Rozcestník
                                    </Typography>
                                </Button>
                            </div>)
                    }
                </Toolbar>
            </Box>
        </AppBar>
    )
}

export default NavBar;
