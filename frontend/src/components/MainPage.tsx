import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import Heading from "./Heading";
import CategoryNavigation from "./CategoryNavigation";


const name = "O nás";
const about = "Tady naleznete ekologické projekty, které jsou aktivní v ČR.Tady naleznete ekologické projekty, které\n" +
    "                jsou aktivní v ČR. Tady naleznete ekologické projekty, které jsou aktivní v ČR. Tady naleznete\n" +
    "                ekologické projekty, které jsou aktivní v ČR. Tady naleznete ekologické projekty, které jsou aktivní v\n" +
    "                ČR. Tady naleznete ekologické projekty, které jsou aktivní v ČR.";
function MainPage() {
    const [data, setData] = useState<Record<string, any>[]>([]);

    useEffect(() => {
        fetch("https://ekospoj.cz/api/Categories", {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then(json => {
                console.log(json);
                setData(json);
            })
            .catch(error => {
                window.alert(error);
            });
    }, []);

    return(
        <>
            <NavBar/>
            <Heading name={name} about={about} size={10} />
            <CategoryNavigation apiCategories={data} />
        </>

    )
}

export default MainPage;
