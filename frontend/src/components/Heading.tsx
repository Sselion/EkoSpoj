import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

interface HeadingProps {
    name: string,
    about: string,
}
function Heading({name, about}:HeadingProps) {
    return (
        <Box sx={{p: 3, textAlign: "center", maxWidth: "70%", margin: '0 auto', mt: 9.5}}>
            <Typography variant="h3" sx={{mb: 2}}>
                {name}
            </Typography>
            <Typography variant="h6" px={{sm: 10, md: 25 }}>
                {about}
            </Typography>
        </Box>
    )
}

export default Heading;
