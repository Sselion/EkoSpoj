import React from "react";
import NavBar from "./NavBar";
import CategoryButton from "./CategoryButton";
import {Typography, Grid, Box, Paper} from "@mui/material";

const name = "O nás";
const about1 = "Vítejte na EkoSpoji! Zde naleznete všechny informace o ekologických projektech v České republice. Jsme spojovacím prvkem mezi těmi, kdo se snaží o pozitivní změnu a těmi, kdo chtějí tuto změnu podporovat."
const about2 = "Naše platforma je navržena tak, aby vám usnadnila objevování ekologických projektů, které vám jsou blízké. Věříme, že společně můžeme tvořit pozitivní dopad na životní " +
    "prostředí a posouvat ekologické myšlení na novou úroveň."

interface MainPageProps {
    categories: Record<string, any>[],
}

function MainPage({categories}: MainPageProps) {
    return (
        <>
            <NavBar/>
            <Box sx={{p: 3, textAlign: "center", maxWidth: "70%", margin: '0 auto', mt: 10}}>
                <Paper
                    sx={{display: "flex", flexDirection: "column", py: 2, backgroundColor: "rgba(256, 256, 256, 0.5)"}}>
                    <Typography variant="h3">
                        {name}
                    </Typography>
                    {about1 &&
                        (<Typography variant="h6" px={{sm: 10, md: 25}} mt={2} sx={{whiteSpace: "pre-line"}}>
                            {about1}
                        </Typography>)
                    }
                    {about2 &&
                        (<Typography variant="h6" px={{sm: 10, md: 25}}>
                            {about2}
                        </Typography>)}
                </Paper>
            </Box>
            <Box display="flex" sx={{p: 3, textAlign: "center", maxWidth: "900px", margin: '0 auto'}}>
                <Grid container mt={0}>
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{mb: 2.5}}>
                            Kategorie projektů
                        </Typography>
                    </Grid>
                    {categories.map((category, index) => (
                            <Grid key={category.shortName} item xs={12} sm={6} md={4} justifyContent="center"
                                  alignItems="center" sx={{display: "flex"}}>
                                <CategoryButton key={index} name={category.name} shortName={category.shortName}/>
                            </Grid>
                        )
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default MainPage;
