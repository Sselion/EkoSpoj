import React from "react";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import CategoryCard from "./CategoryCard";

function Categories() {
    return (
        <Box display="flex" sx={{p: 3, textAlign: "center", maxWidth: "900px", margin: '0 auto', mt: 8}}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h3" sx={{mb: 3}}>
                        Kategorie projektů
                    </Typography>
                </Grid>
                {/*Karty*/}
                <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
                    <CategoryCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
                    <CategoryCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
                    <CategoryCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
                    <CategoryCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
                    <CategoryCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
                    <CategoryCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
                    <CategoryCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
                    <CategoryCard/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Categories;