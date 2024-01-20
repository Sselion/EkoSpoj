import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";

import ProjectTag from "./ProjectTag";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
    project: Record<string, any>,
}

function ProjectCard({ project }: ProjectCardProps) {
    const [open, setOpen] = useState(false);
    const [lines, setLines] = useState(7);
    const titleRef = useRef(null);

    useEffect(() => {
        const element: any = titleRef?.current;
        if(element) {
           const titleHeight = element.clientHeight;
           if (titleHeight > 65) {
               setLines(5);
           } else if (titleHeight > 33) {
               setLines(6);
           } else {
               setLines(7)
           }
        }
    }, [project.name]);

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
                height: "470px",
                display: "flex", flexDirection: 'column',
                justifyContent: "space-between",
                mb: 3,
            }}>
                <Box sx={{ height: "410px" }}>
                    <Box sx={{ display: "flex", flexDirection: 'row', alignItems: "left", pt: 1, pl: 1 }}>
                        {project.categoriesName.map((tag: string) => (<ProjectTag key={tag} tag={tag}/>))}
                    </Box>
                    <CardMedia image="/images/Life_Tree_Check_logo.png" sx={{ height: 120 }}
                               title="Life Tree Check logo"/>
                    {/*{project.projectLogoPath && (<CardMedia image={`${project.projectLogoPath}`} sx={{height: 120}} title="Life Tree Check logo"/>)}*/}
                    <CardContent>
                        <Typography variant="h5" ref={titleRef}>
                            {project.name}
                        </Typography>
                        <Typography gutterBottom variant="body1" sx={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            mt: 1,
                            maxHeight: "168px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            overflowWrap: "anywhere",
                            WebkitLineClamp: lines,
                        }}>
                            {project.shortDescription}
                        </Typography>
                    </CardContent>
                </Box>
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
