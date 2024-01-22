import React from "react";
import { Typography, Box } from "@mui/material";

interface ProjectTagProps {
    tag: string,
}

function ProjectTag({ tag }: ProjectTagProps) {
    return (
        <Box display="inline-block" sx={{
            borderRadius: "5px",
            color: "white",
            backgroundColor: "#83C089",
            p: "2px 4px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            mr: 1,
            mt: 1,
        }}>
            <Typography variant="caption">
                {tag}
            </Typography>
        </Box>
    )
}

export default ProjectTag;