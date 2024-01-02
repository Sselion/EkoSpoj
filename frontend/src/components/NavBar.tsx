import React from "react";
import Box from "@mui/material/Box";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";

function NavBar() {
    return(
        <AppBar sx={{backgroundColor: "white"}}>
            <Box ml={5} mr={5}>
                <Toolbar>
                    <Typography variant="h4" sx={{flexGrow: 1, color: "#297229"}}>
                        EkoSpoj
                    </Typography>
                    <Button
                        sx={{
                            color: "#297229",
                            "&:hover": {
                                backgroundColor: "#e8ffe8"
                            }
                        }}
                    >Rozcestník</Button>
                </Toolbar>
            </Box>
        </AppBar>
    )
}

export default NavBar;
