import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Paper from '@mui/material/Paper';

interface HeadingProps {
    name: string,
    about1?: string,
    about2?: string,
    size: number,
}

function Heading({name, about1, about2, size}: HeadingProps) {
    return (
        <Box sx={{p: 3, textAlign: "center", maxWidth: "70%", margin: '0 auto', mt: size}}>
            <Paper sx={{display: "flex", flexDirection: "column", py: 2, backgroundColor: "rgba(256, 256, 256, 0.5)"}}>
                <Typography variant="h3" >
                    {name}
                </Typography>
                {about1 &&
                    (<Typography variant="h6" px={{sm: 10, md: 25}} mt={2} sx={{whiteSpace: "pre-line"}}>
                        {about1}
                    </Typography>)
                }
                {about2 &&
                    (<Typography variant="h6" px={{sm: 10, md: 25}}>
                        {about2}
                    </Typography>)}
            </Paper>
        </Box>
    )
}

export default Heading;
