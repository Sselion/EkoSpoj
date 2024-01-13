import React from "react";
import NavBar from "./NavBar";
import Heading from "./Heading";
import Grid from "@mui/material/Grid";
import NavTag from "./NavTag";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";
import {useParams} from "react-router-dom";

interface CategoryPageProps {
    categories: Record<string, any>[],
}

function CategoryPage({categories}: CategoryPageProps) {
    const {categoryName} = useParams();
    const foundCategory = categories.find(({ shortName }) => shortName === categoryName);

    return (
        <>
            <NavBar/>
            <Box sx={{display: "flex", flexDirection: 'row', mt: 11}}>
                <Grid container spacing={1} sx={{justifyContent: 'center'}}>
                    {categories.map((category, index) => (
                        <Grid item>
                            <NavTag category={category}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Heading name={foundCategory?.name} size={2}/>
            <Box display="flex"
                 sx={{p: 3, textAlign: "center", maxWidth: "70%", margin: '0 auto', mt: 0, flexDirection: 'column'}}>
                <Box sx={{display: "flex", textAlign: "center"}}>
                    <Grid container spacing={1} sx={{justifyContent: "center"}}>
                        {categories.map((category, index) => (
                            <Grid item xs={12} md={6} lg={4} xl={3} justifyContent="center" alignItems="center"
                                  sx={{display: "flex"}} key={index}>
                                <ProjectCard categories={categories}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default CategoryPage;
