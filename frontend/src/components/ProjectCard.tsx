import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SmallTag from "./SmallTag";

interface ProjectCardProps {
    categories: string[],
}
function ProjectCard({categories}:ProjectCardProps) {
    return (
        <Card sx={{

            width: "280px",
            justifyContent: "center",
            mb: 3,
        }}>
            <CardMedia image="images/Life_Tree_Check_logo.png" sx={{height: 120}} title="Life Tree Check logo"/>
            <CardContent>
                <Typography variant="h5">
                    LIFE Tree Check
                </Typography>
                <Typography gutterBottom variant="body1" sx={{mt: 1}}>
                    Pomáháme městům střední Evropy účinně čelit dopadům klimatické změny: zejména stále častějším vlnám
                    veder a přehřívání měst.
                </Typography>
                <Box sx={{flexDirection: 'row', alignItems: "left"}}>
                    {categories.map((category, index) => (<SmallTag  key={index} category={category} />))}

                </Box>
            </CardContent>
            <CardActions sx={{pb: 2, justifyContent: "center"}}>
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
                }}>
                    <Typography variant="caption">
                        Více
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;
