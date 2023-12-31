import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./components/MainPage";
import CategoryPage from "./components/CategoryPage";
import "./styles.css"



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/category" element={<CategoryPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;