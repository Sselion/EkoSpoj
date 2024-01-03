import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Paper from '@mui/material/Paper';

interface HeadingProps {
    name: string,
    about: string,
    size: number,
}
function Heading({name, about, size}:HeadingProps) {
    return (
        <Box sx={{p: 3, textAlign: "center", maxWidth: "70%", margin: '0 auto', mt: size}}>
            <Paper sx={{display: "flex", flexDirection: "column", py: 2}}>
            <Typography variant="h3" sx={{mb: 2}}>
                {name}
            </Typography>
            <Typography variant="h6" px={{sm: 10, md: 25 }}>
                {about}
            </Typography>
            </Paper>
        </Box>
    )
}

export default Heading;
