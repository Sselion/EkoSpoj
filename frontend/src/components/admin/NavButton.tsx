import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NavButtonProps } from "./types";

function NavButton({type, onClick}: NavButtonProps) {
    return (
            <Button onClick={onClick} sx={{
                borderRadius: "5px",
                color: "white",
                backgroundColor: "#83C089",
                p: 1,
                px: 2,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                "&:hover": {
                    backgroundColor: "#83C089"
                },
                "&:active, &:focus": {
                    backgroundColor: "#E8FFE8",
                    color: "#297229",
                },
            }}>
                <Typography variant="body1">
                    {type}
                </Typography>
            </Button>
    )
}
export default NavButton