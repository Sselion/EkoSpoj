import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./components/MainPage";
import CategoryPage from "./components/CategoryPage";
import "./styles.css"

function App() {
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
                setData(json);
            })
            .catch(error => {
                window.alert(error);
            });
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage categories={data}/>}/>
                <Route path="/category/:categoryName" element={<CategoryPage categories={data}/>}/>
            </Routes>
        </Router>
    );
}

export default App;