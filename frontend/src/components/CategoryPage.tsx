import React from "react";
import NavBar from "./NavBar";
import Heading from "./Heading";
import CategoryDisplay from "./CategoryDisplay";

const name = "Vybraná kategorie";
const about = "Tady naleznete vybraný ekologický projekt. Tady naleznete vybraný ekologický projekt. Tady naleznete vybraný ekologický projekt. Tady naleznete vybraný ekologický projekt. Tady naleznete vybraný ekologický projekt. Tady naleznete vybraný ekologický projekt."

function CategoryPage() {
    return (
        <>
            <NavBar/>
            <Heading name={name} about={about}/>
            <CategoryDisplay />

        </>
    )
}

export default CategoryPage;
