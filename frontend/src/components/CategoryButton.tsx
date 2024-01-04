import React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Toolbar} from "@mui/material";
import {Link} from "react-router-dom";


interface CardProps {
    name: string
}

function CategoryButton(props: CardProps) {
    return (
        <Toolbar>
            <Link to="/category">
                <Button sx={{
                    color: "#297229",
                    backgroundColor: "#E8FFE8",
                    p: 3,
                    mb: 3,
                    borderRadius: "10px",
                    width: "250px",
                    height: "112px",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    "&:hover": {
                        backgroundColor: "#e8ffe8"
                    }
                }}>
                    <Typography variant="h5" sx={{color: "black", textAlign: 'center'}}>
                        {props.name}
                    </Typography>
                </Button>
            </Link>
        </Toolbar>
    )
}

export default CategoryButton;

