import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Button, Card, CardActions, CardContent, CardMedia, Tooltip } from "@mui/material";

import ProjectTag from "./ProjectTag";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
    project: Record<string, any>,
}

function ProjectCard({ project }: ProjectCardProps) {
    const [open, setOpen] = useState(false);
    const [lines, setLines] = useState(7);
    const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const element: any = titleRef?.current;
        if (element) {
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

    useEffect(() => {
        const element: any = descriptionRef?.current;

        if (element) {
            const clientHeight = element.clientHeight;
            const scrollHeight = element.scrollHeight;

            setIsOverflowing(clientHeight < scrollHeight);
        }
    }, [project.shortDescription, lines]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const tooltipTitle = (
        <Typography variant="body2">
            {project.shortDescription}
        </Typography>
    )

    return (
        <>
            <Card sx={{
                borderRadius: "10px",
                width: "280px",
                height: "470px",
                display: "flex", flexDirection: 'column',
                justifyContent: "space-between",
                mb: 3,
                px: 1,
            }}>
                <Box sx={{ height: "410px" }}>
                    <Box sx={{ display: "flex", flexDirection: 'row', alignItems: "left", pb: 1 }}>
                        {project.tagsName.map((tag: string) => (<ProjectTag key={tag} tag={tag}/>))}
                    </Box>
                    {project.projectLogoPath && (<CardMedia className="card-media-img" sx={{
                        height: 120,
                        width: "100%",
                        backgroundImage: `url(${project.projectLogoPath})`,
                        backgroundSize: "contain"
                    }} title={`${project.name} logo`}>
                        <></>
                    </CardMedia>)}
                    <CardContent>
                        <Typography variant="h5" ref={titleRef}>
                            {project.name}
                        </Typography>
                        {isOverflowing &&
                            <Tooltip title={tooltipTitle} placement="bottom">
                                <Typography gutterBottom ref={descriptionRef} variant="body1" sx={{
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
                            </Tooltip>
                        }
                        {!isOverflowing &&
                            <Typography gutterBottom ref={descriptionRef} variant="body1" sx={{
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
                        }
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
