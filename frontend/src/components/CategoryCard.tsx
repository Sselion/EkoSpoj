import React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Toolbar} from "@mui/material";

function CategoryCard() {
    return (
        <Toolbar>
            <Button sx={{
                color: "#297229",
                backgroundColor: "#FBFBFB",
                p: 3,
                mb: 3,
                borderRadius: "10px",
                "&:hover": {
                    backgroundColor: "#e8ffe8"
                }
            }}>
                <Typography variant="h4" sx={{color: "black", textAlign: 'center'}}>
                    Analýzy
                </Typography>
            </Button>
        </Toolbar>
    )
}

export default CategoryCard;
