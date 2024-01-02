import React from "react";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import ProjectTag from "./ProjectTag";

const categorySelection = ["Odpadové hospodářství", "Analýzy", "Energetika", "Obnova krajiny", "Právo", "Zpravodajství", "Transformace"];

function CategoryDisplay() {
    return (
        <Box display="flex"
             sx={{p: 3, textAlign: "center", maxWidth: "70%", margin: '0 auto', mt: 5, flexDirection: 'column'}}>
            <Typography variant="h3" sx={{mb: 2.5}}>
                Projekty
            </Typography>
            <Box sx={{display: "flex", flexDirection: 'row'}}>
                <Grid container spacing={1} sx={{justifyContent: 'center'}}>
                    {categorySelection.map((category, index) => (
                        <Grid item>
                            <ProjectTag name={category}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default CategoryDisplay;