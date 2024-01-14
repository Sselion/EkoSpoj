import React from "react";
import NavBar from "./NavBar";
import Heading from "./Heading";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import CategoryButton from "./CategoryButton";
import Box from "@mui/material/Box";


const name = "O nás";
const about1 = "Vítejte na EkoSpoji! Zde naleznete všechny informace o ekologických projektech v České republice. Jsme spojovacím prvkem mezi těmi, kdo se snaží o pozitivní změnu a těmi, kdo chtějí tuto změnu podporovat."
const about2 ="Naše platforma je navržena tak, aby vám usnadnila objevování ekologických projektů, které vám jsou blízké. Věříme, že společně můžeme tvořit pozitivní dopad na životní " +
    "prostředí a posouvat ekologické myšlení na novou úroveň."

interface MainPageProps {
    categories: Record<string, any>[],
}

function MainPage({categories}: MainPageProps) {
    return (
        <>
            <NavBar/>
            <Heading name={name} about1={about1} about2={about2} size={10}/>
            <Box display="flex" sx={{p: 3, textAlign: "center", maxWidth: "900px", margin: '0 auto'}}>
                <Grid container mt={0}>
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{mb: 2.5}}>
                            Kategorie projektů
                        </Typography>
                    </Grid>
                    {categories.map((category, index) => (
                            <Grid key={category.shortName} item xs={12} sm={6} md={4} justifyContent="center" alignItems="center" sx={{display: "flex"}}>
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
