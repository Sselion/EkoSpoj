import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NavButtonProps } from "./types";

function SubNavButton({type, onClick}: NavButtonProps) {
    return (
        <Button onClick={onClick} sx={{
            borderRadius: "20px",
            color: "#297229",
            backgroundColor: "#E8FFE8",
            p: 1,
            px: 2,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            "&:hover": {
                backgroundColor: "#83C089"
            },
            "&:active, &:focus": {
                backgroundColor: "#83C089",
                color: "white",
            },
        }}>
            <Typography variant="caption">
                {type}
            </Typography>
        </Button>
    )
}
export default SubNavButton;