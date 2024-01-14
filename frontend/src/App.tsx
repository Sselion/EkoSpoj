import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage";
import CategoryPage from "./components/CategoryPage";
import "./styles.css"

function App() {
    const [categoryData, setCategoryData] = useState<Record<string, any>[]>([]);
    const [projectData, setProjectData] = useState<Record<string, any>[]>([]);

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
                setCategoryData(json);
            })
            .catch(error => {
                window.alert(error);
            });

        fetch("https://ekospoj.cz/api/Projects", {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                setProjectData(json);
            })
            .catch(error => {
                window.alert(error);
            });
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage categories={categoryData}/>}/>
                <Route path="/category/:categoryName"
                       element={<CategoryPage categories={categoryData} projects={projectData}/>}/>
            </Routes>
        </Router>
    );
}

export default App;