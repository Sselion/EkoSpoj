import React from "react";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
interface SmallTagProps {
    category: string,
}
function SmallTag({category}:SmallTagProps) {
    return(
        <Box display="inline-block" sx={{
            borderRadius: "20px",
            color: "white",
            backgroundColor: "#83C089",
            p: 1,
            px: 2,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            ml: 1,
            mt:1,
        }}>
            <Typography variant="caption">
                {category}
            </Typography>
        </Box>
    )
}

export default SmallTag;