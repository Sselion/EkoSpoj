import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function ErrorPage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <Box>
            <NavBar />
            <Box sx={{display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center", mt: "12%"}}>
                <Typography variant="h2">
                    Stránka nenalezena
                </Typography>
                <Button onClick={handleButtonClick} sx={{
                    color: "white",
                    backgroundColor: "#83C089",
                    "&:hover": {
                        backgroundColor: "#83C089",
                        color: "white"
                    },
                    mt: 5,
                    p: 1,
                }}>
                    <Typography variant="h5">
                        Návrat na hlavní stránku
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default ErrorPage;