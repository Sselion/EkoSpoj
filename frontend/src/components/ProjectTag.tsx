import React from "react";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

interface TagProps {
    name: string
}
function ProjectTag({name}: TagProps) {
    return (
        <Button sx={{
            borderRadius: "20px",
            color: "#297229",
            backgroundColor: "#E8FFE8",
            p: 1,
            px: 2,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            "&:hover": {
                backgroundColor: "#e8ffe8"
            },
            "&:active, &:focus": {
                backgroundColor: "#83C089",
                color: "white",
            },
        }}>
            <Typography variant="caption">
                {name}
            </Typography>
        </Button>
    )
}

export default ProjectTag;
