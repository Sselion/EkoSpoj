import React from "react";
import Box from "@mui/material/Box";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";

function NavBar() {
    return(
        <AppBar sx={{backgroundColor: "white"}}>
            <Box ml={5} mr={5}>
                <Toolbar>
                    <Typography variant="h4" sx={{flexGrow: 1, color: "#2B6048"}}>
                        EkoSpoj
                    </Typography>
                    <Button
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
