import React from "react";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import CategoryCard from "./CategoryCard";

const categories = ["Odpadové hospodářství", "Vzdělávání", "Analýzy", "Energetika", "Obnova krajiny", "Právo", "Data", "Zpravodajství", "Transformace"];

function Categories() {
    return (
        <Box display="flex" sx={{p: 3, textAlign: "center", maxWidth: "900px", margin: '0 auto', mt: 5}}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" sx={{mb: 2.5}}>
                        Kategorie projektů
                    </Typography>
                </Grid>
                {categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
                        <CategoryCard key={index} name={category}/>
                    </Grid>
                    )
                )}
            </Grid>
        </Box>
    )
}

export default Categories;