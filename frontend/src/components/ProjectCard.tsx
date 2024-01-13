import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ProjectTag from "./ProjectTag";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
    categories: Record<string, any>[],
}

function ProjectCard({categories}: ProjectCardProps) {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <>
            <Card sx={{
                borderRadius: "10px",
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
                        Pomáháme městům střední Evropy účinně čelit dopadům klimatické změny: zejména stále častějším
                        vlnám
                        veder a přehřívání měst.
                    </Typography>
                    <Box sx={{flexDirection: 'row'}}>
                        {categories.map((category, index) => (<ProjectTag key={index} tag={category.name}/>))}
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
                    }} onClick={handleOpen}>
                        <Typography variant="caption">
                            Více
                        </Typography>
                    </Button>
                </CardActions>
            </Card>
            <ProjectModal handleClose={handleClose} isOpen={open}/>
        </>
    )
}

export default ProjectCard;
