import React from "react";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";

const categorySelection = ["Odpadové hospodářství", "Analýzy", "Energetika", "Obnova krajiny", "Právo", "Zpravodajství", "Transformace"];

function CategoryDisplay() {
    return (
        <Box display="flex"
             sx={{p: 3, textAlign: "center", maxWidth: "70%", margin: '0 auto', mt: 0, flexDirection: 'column'}}>
            <Box sx={{display: "flex", textAlign: "center"}}>
                <Grid container spacing={1} sx={{justifyContent: "center"}}>
                    {categorySelection.map((category, index) => (
                        <Grid item xs={12} md={6} lg={4} xl={3} justifyContent="center" alignItems="center"
                              sx={{display: "flex"}} key={index}>
                            <ProjectCard categories={categorySelection}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default CategoryDisplay;