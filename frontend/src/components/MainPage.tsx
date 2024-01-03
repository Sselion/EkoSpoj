import React from "react";
import Box from "@mui/material/Box";
import NavBar from "./NavBar";
import Heading from "./Heading";
import CategorySelection from "./CategorySelection";


const name = "O nás";
const about = "Tady naleznete ekologické projekty, které jsou aktivní v ČR.Tady naleznete ekologické projekty, které\n" +
    "                jsou aktivní v ČR. Tady naleznete ekologické projekty, které jsou aktivní v ČR. Tady naleznete\n" +
    "                ekologické projekty, které jsou aktivní v ČR. Tady naleznete ekologické projekty, které jsou aktivní v\n" +
    "                ČR. Tady naleznete ekologické projekty, které jsou aktivní v ČR.";
function MainPage() {
    return(
        <>
            <NavBar/>
            <Heading name={name} about={about} size={10} />
            <CategorySelection />
        </>

    )
}

export default MainPage;
