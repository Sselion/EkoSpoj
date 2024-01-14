import React, { useState }  from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import ProjectTag from "./ProjectTag";
import Button from "@mui/material/Button";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import X from "@mui/icons-material/X";

interface ProjectModalProps {
    handleClose: VoidFunction;
    isOpen: boolean;
    project: Record<string, any>,
}


function ProjectModal({handleClose, isOpen, project}: ProjectModalProps) {

    return (
        <Dialog open={isOpen} sx={{borderRadius: "20px"}}>
            <Box p={3} px={5}>
                <Typography variant="h2" sx={{textAlign: "center"}}>
                    {project.name}
                </Typography>
                <Box mt={1} sx={{
                    display: "flex", flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    alignItems: "center",
                }}>
                    {project.categoriesName.map((category: string) => (<ProjectTag key={category} tag={category}/>))}
                </Box>
                <Box mt={2}>
                    {project.contacts.map((contact: Record<string, any>, index:number) => (
                        <a key={index} href={contact.value} target="_blank" rel="noopener noreferrer">
                            <img src={contact.iconPath} alt={`${contact.typeName} icon`} />
                        </a>
                    ))}
                </Box>
                <Box mt={4} mb={3}>
                    <Typography variant="body1">
                        {project.description}
                    </Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button sx={{
                        borderRadius: "20px",
                        color: "#297229",
                        backgroundColor: "#E8FFE8",
                        p: 1,
                        px: 2,
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        ml: 1,
                        mt: 1,
                        "&:hover": {
                            backgroundColor: "#e8ffe8"
                        },
                        "&:active, &:focus": {
                            backgroundColor: "#83C089",
                            color: "white",
                        }
                    }} onClick={handleClose}>
                        <Typography variant="caption">
                            Zavřít
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )
}

export default ProjectModal;
