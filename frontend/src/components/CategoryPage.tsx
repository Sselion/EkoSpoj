import React, { useEffect } from "react";
import NavBar from "./NavBar";
import NavTag from "./NavTag";
import ProjectCard from "./ProjectCard";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Grid, Box, Skeleton } from "@mui/material";

interface CategoryPageProps {
    categories: Record<string, any>[],
    projects: Record<string, any>[],
}

function CategoryPage({ categories, projects }: CategoryPageProps) {
    const { categoryName } = useParams();
    const foundCategory = categories.find(({ shortName }) => shortName === categoryName);
    const categoryProjects = projects.filter(project => project.categoriesName.includes(foundCategory?.shortName));
    const navigate = useNavigate();

    const categoryExists = categories.some(category => category.shortName === categoryName);

    useEffect(() => {
        if (categories.length > 0 && !categoryExists) {
            navigate('/404');
        }
    }, [categoryExists, navigate, categories]);

    return (
        <>
            <NavBar/>
            <Box sx={{ display: "flex", flexDirection: 'row', mt: 11 }}>
                <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                    {categories.length > 0 ? (
                        categories.map((category, index) => (
                            <Grid key={category.shortName} item>
                                <NavTag category={category}/>
                            </Grid>
                        ))
                    ) : (
                        <Grid container item xs={12} sx={{ justifyContent: 'center' }}>
                            <Skeleton variant="rounded" height={50}
                                      sx={{ borderRadius: "20px", width: "65%", height: "36px" }}/>
                        </Grid>
                    )}
                </Grid>
            </Box>
            <Box sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                maxWidth: "70%",
                margin: '0 auto',
                mt: 2,
                p: 3
            }}>
                <Typography variant="h3">
                    {foundCategory?.name}
                </Typography>
            </Box>
            <Box display="flex"
                 sx={{ p: 3, textAlign: "center", maxWidth: "70%", margin: '0 auto', mt: 0, flexDirection: 'column' }}>
                <Box sx={{ display: "flex", textAlign: "center" }}>
                    <Grid container spacing={1} sx={{ justifyContent: "center" }}>
                        {projects.length > 0 ? (
                            categoryProjects.map((project, index) => (
                                <Grid key={index} item xs={12} md={6} lg={4} xl={3} justifyContent="center"
                                      alignItems="center"
                                      sx={{ display: "flex" }}>
                                    <ProjectCard project={project}/>
                                </Grid>))
                        ) : (
                            <>
                                <Skeleton variant="rounded" sx={{ width: "296px", height: "470px", mr: 2 }}/>
                                <Skeleton variant="rounded" sx={{ width: "296px", height: "470px", mr: 2 }}/>
                                <Skeleton variant="rounded" sx={{ width: "296px", height: "470px", mr: 2 }}/>
                                <Skeleton variant="rounded" sx={{ width: "296px", height: "470px", mr: 2 }}/>
                            </>
                        )
                        }
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default CategoryPage;
