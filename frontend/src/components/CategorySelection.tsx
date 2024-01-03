import React from "react";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import CategoryButton from "./CategoryButton";

const categorySelection = ["Odpadové hospodářství", "Analýzy", "Energetika", "Obnova krajiny", "Právo", "Zpravodajství", "Transformace"];

function Categories() {
    return (
        <Box display="flex" sx={{p: 3, textAlign: "center", maxWidth: "900px", margin: '0 auto'}}>
            <Grid container mt={0}>
                <Grid item xs={12}>
                    <Typography variant="h3" sx={{mb: 2.5}}>
                        Kategorie projektů
                    </Typography>
                </Grid>
                {categorySelection.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
                        <CategoryButton key={index} name={category}/>
                    </Grid>
                    )
                )}
            </Grid>
        </Box>
    )
}

export default Categories;