import React from "react";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";

function NavBar() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return(
        <AppBar sx={{backgroundColor: "white"}}>
            <Box ml={5} mr={5}>
                <Toolbar>
                    <Typography variant="h4" sx={{flexGrow: 1, color: "#2B6048"}}>
                        EkoSpoj
                    </Typography>
                    <Button onClick={handleButtonClick}
                        sx={{
                            color: "#2B6048",
                            "&:hover": {
                                backgroundColor: "#83C089",
                                color: "white"
                            }
                        }}
                    >
                        <Typography variant="subtitle1" display="block" >
                        Rozcestník
                        </Typography>
                    </Button>
                </Toolbar>
            </Box>
        </AppBar>
    )
}

export default NavBar;
