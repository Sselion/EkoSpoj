import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage";
import CategoryPage from "./components/CategoryPage";
import ContactPage from "./components/ContactPage";
import "./styles.css"
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AdminPage from "./components/admin/AdminPage";
import LoginForm from "./components/admin/LoginForm";

function App() {
    const [categoryData, setCategoryData] = useState<Record<string, any>[]>([]);
    const [projectData, setProjectData] = useState<Record<string, any>[]>([]);

    function fetchCategories() {
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
    }

    useEffect(() => {
        fetchCategories();

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
            <NavBar/>
            <Routes>
                <Route path="/" element={<MainPage categories={categoryData}/>}/>
                <Route path="/category/:categoryName"
                       element={<CategoryPage categories={categoryData} projects={projectData}/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/admin" element={<AdminPage categories={categoryData} fetchCategories={fetchCategories}/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;