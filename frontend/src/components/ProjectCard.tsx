import React, { useState } from "react";
import { Typography, Box, Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";

import ProjectTag from "./ProjectTag";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
    project: Record<string, any>,
}

function ProjectCard({ project }: ProjectCardProps) {
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
                {/*{(<CardMedia image="images/Life_Tree_Check_logo.png" sx={{height: 120}} title="Life Tree Check logo"/>)}*/}
                <CardContent>
                    <Typography variant="h5">
                        {project.name}
                    </Typography>
                    <Typography gutterBottom variant="body1" sx={{ mt: 1 }}>
                        {project.description}
                    </Typography>
                    <Box sx={{ flexDirection: 'row' }}>
                        {project.categoriesName.map((tag: string) => (<ProjectTag key={tag} tag={tag}/>))}
                    </Box>
                </CardContent>
                <CardActions sx={{ pb: 2, justifyContent: "center" }}>
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
            <ProjectModal handleClose={handleClose} isOpen={open} project={project}/>
        </>
    )
}

export default ProjectCard;
