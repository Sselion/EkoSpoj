import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { RemoveButtonProps } from "./types"

function RemoveButton({ removeItem, type }: RemoveButtonProps) {
    return (
        <IconButton onClick={removeItem} disabled={type === 'Smazat'} sx={{
            height: "50px",
            width: "50px",
            "&:hover": {
                backgroundColor: "inherit"
            }
        }}>
            <CloseIcon sx={{ color: "black" }}/>
        </IconButton>
    )
}

export default RemoveButton;
