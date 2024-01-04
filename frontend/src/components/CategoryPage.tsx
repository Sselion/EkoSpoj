import React from "react";
import NavBar from "./NavBar";
import Heading from "./Heading";
import CategoryDisplay from "./CategoryDisplay";
import Grid from "@mui/material/Grid";
import ProjectTag from "./ProjectTag";
import Box from "@mui/material/Box";
import ProjectModal from "./ProjectModal";

const name = "Vybraná kategorie";
const about = "Tady naleznete vybraný ekologický projekt. Tady naleznete vybraný ekologický projekt. Tady naleznete vybraný ekologický projekt. Tady naleznete vybraný ekologický projekt. Tady naleznete vybraný ekologický projekt. Tady naleznete vybraný ekologický projekt."
const categorySelection = ["Odpadové hospodářství", "Analýzy", "Energetika", "Obnova krajiny", "Právo", "Zpravodajství", "Transformace"];
function CategoryPage() {
    return (
        <>
            <NavBar/>
            <Box sx={{display: "flex", flexDirection: 'row', mt: 11}}>
                <Grid container spacing={1} sx={{justifyContent: 'center'}}>
                    {categorySelection.map((category, index) => (
                        <Grid item>
                            <ProjectTag name={category}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Heading name={name} about={about} size={2}/>
            <CategoryDisplay />
        </>
    )
}

export default CategoryPage;
