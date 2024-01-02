import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

function Header() {
    return (
        <Box sx={{p: 3, textAlign: "center", maxWidth: "70%", margin: '0 auto', mt: 8}}>
            <Typography variant="h3" sx={{mb: 2}}>
                O nás
            </Typography>
            <Typography>
                Tady naleznete ekologické projekty, které jsou aktivní v ČR.Tady naleznete ekologické projekty, které
                jsou aktivní v ČR. Tady naleznete ekologické projekty, které jsou aktivní v ČR. Tady naleznete
                ekologické projekty, které jsou aktivní v ČR. Tady naleznete ekologické projekty, které jsou aktivní v
                ČR. Tady naleznete ekologické projekty, které jsou aktivní v ČR.
            </Typography>
        </Box>
    )
}

export default Header;
