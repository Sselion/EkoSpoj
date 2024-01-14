import React from "react";
import { Typography, Box, Dialog, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import X from "@mui/icons-material/X";
import LanguageIcon from '@mui/icons-material/Language';
import ProjectTag from "./ProjectTag";

interface ProjectModalProps {
    handleClose: VoidFunction;
    isOpen: boolean;
    project: Record<string, any>,
}

function ProjectModal({ handleClose, isOpen, project }: ProjectModalProps) {
    return (
        <Dialog open={isOpen} sx={{ borderRadius: "20px" }}>
            <Box pb={3} px={5}>
                <Box mt={1} mb={2} sx={{
                    display: "flex", flexDirection: "row",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                }}>
                    {project.categoriesName.map((category: string) => (
                        <ProjectTag key={category} tag={category}/>
                    ))}
                </Box>
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                    {project.name}
                </Typography>
                <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
                    {project.contacts.map((contact: Record<string, any>, index: number) => (
                        <a key={index} href={contact.value} target="_blank" rel="noopener noreferrer"
                           className="icon-link">
                            {contact.typeName === "Web" && <LanguageIcon/>}
                            {contact.typeName === "Facebook" && <FacebookIcon/>}
                            {contact.typeName === "Instagram" && <InstagramIcon/>}
                            {contact.typeName === "X" && <X/>}
                        </a>
                    ))}
                </Box>
                <Box mt={2} mb={3}>
                    <Typography variant="body1">
                        {project.description}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
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
