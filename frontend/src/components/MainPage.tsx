import React from "react";
import NavBar from "./NavBar";
import CategoryButton from "./CategoryButton";
import { Typography, Grid, Box, Paper, Skeleton } from "@mui/material";
import Footer from "./Footer";

const name = "O nás";
const about1 = "Vítejte v našem katalogu ekologických projektů, kde můžete objevit iniciativy, které jsou vám sympatické. Projděte si jednotlivé kategorie a objevujte, co se v Česku děje pro ochranu krajiny a zelenou transformaci."


const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface MainPageProps {
    categories: Record<string, any>[],
}

function MainPage({ categories }: MainPageProps) {
    return (
        <>
            <Box sx={{ p: 3, textAlign: "center", maxWidth: "900px", margin: '0 auto', mt: 10 }}>
                <Paper
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        py: 2,
                        backgroundColor: "rgba(256, 256, 256, 0.5)"
                    }}>
                    <Typography variant="h3">
                        {name}
                    </Typography>
                    {about1 &&
                        (<Typography variant="h6" px="5%" mt={2} sx={{ whiteSpace: "pre-line" }}>
                            {about1}
                        </Typography>)
                    }
                </Paper>
            </Box>
            <Box display="flex" sx={{ p: 3, textAlign: "center", maxWidth: "900px", margin: '0 auto' }}>
                <Grid container mt={0}>
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{ mb: 2.5 }}>
                            Kategorie projektů
                        </Typography>
                    </Grid>
                    {categories.length > 0 ? (
                        categories.map((category, index) => (
                                <Grid key={category.shortName} item xs={12} sm={6} md={4} justifyContent="center"
                                      alignItems="center" sx={{ display: "flex" }}>
                                    <CategoryButton key={index} name={category.name} shortName={category.shortName}/>
                                </Grid>
                            )
                        )
                    ) : (
                        skeletons.map((skeleton: number) => (
                            <Grid key={skeleton} item xs={12} sm={6} md={4} justifyContent="center"
                                  alignItems="center" sx={{ display: "flex" }}>
                                <Skeleton variant="rounded" width={250} height={112}
                                          sx={{ mb: 2.5, borderRadius: "10px" }}/>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default MainPage;
