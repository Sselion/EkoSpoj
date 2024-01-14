import React from "react";
import NavBar from "./NavBar";
import Grid from "@mui/material/Grid";
import NavTag from "./NavTag";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";
import {useParams} from "react-router-dom";
import {Typography} from "@mui/material";

interface CategoryPageProps {
    categories: Record<string, any>[],
    projects: Record<string, any>[],
}

function CategoryPage({categories, projects}: CategoryPageProps) {
    const {categoryName} = useParams();
    const foundCategory = categories.find(({ shortName }) => shortName === categoryName);
    const categoryProjects = projects.filter(project => project.tagsName.includes(foundCategory?.shortName));

    return (
        <>
            <NavBar/>
            <Box sx={{display: "flex", flexDirection: 'row', mt: 11}}>
                <Grid container spacing={1} sx={{justifyContent: 'center'}}>
                    {categories.map((category, index) => (
                        <Grid key={category.shortName} item>
                            <NavTag category={category}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{display: "flex", textAlign: "center", justifyContent: "center", maxWidth: "70%", margin: '0 auto', mt: 2, p: 3,}}>
                    <Typography variant="h3" >
                        {foundCategory?.name}
                    </Typography>
            </Box>
            <Box display="flex"
                 sx={{p: 3, textAlign: "center", maxWidth: "70%", margin: '0 auto', mt: 0, flexDirection: 'column'}}>
                <Box sx={{display: "flex", textAlign: "center"}}>
                    <Grid container spacing={1} sx={{justifyContent: "center"}}>
                        {categoryProjects.map((project, index) => (
                            <Grid key={index} item xs={12} md={6} lg={4} xl={3} justifyContent="center" alignItems="center"
                                  sx={{display: "flex"}}>
                                <ProjectCard project={project}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default CategoryPage;
