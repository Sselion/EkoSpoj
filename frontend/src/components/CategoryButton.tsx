import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Toolbar } from "@mui/material";

interface CategoryButtonProps {
    name: string,
    shortName: string,
}

function CategoryButton({ name, shortName }: CategoryButtonProps) {
    return (
        <Toolbar>
            <Link to={`/category/${shortName}`}>
                <Button sx={{
                    color: "#297229",
                    backgroundColor: "#E8FFE8",
                    p: 3,
                    mb: 3,
                    borderRadius: "10px",
                    width: "250px",
                    height: "112px",
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    wordWrap: 'break-word',
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    "&:hover": {
                        backgroundColor: "#e8ffe8"
                    }
                }}>
                    <Typography variant="h5" sx={{ color: "black", textAlign: 'center' }}>
                        {name}
                    </Typography>
                </Button>
            </Link>
        </Toolbar>
    )
}

export default CategoryButton;

