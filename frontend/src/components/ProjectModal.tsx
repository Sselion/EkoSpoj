import React from "react";
import { Typography, Box, Dialog, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import X from "@mui/icons-material/X";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ProjectTag from "./ProjectTag";

const TikTokIcon = ({ color = "#696969" }) => {
    return (
        <svg
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="24px"
            height="24px"
            className="custom-icon"
        >
            <path
                d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/>
        </svg>
    );
};

interface ProjectModalProps {
    handleClose: VoidFunction;
    isOpen: boolean;
    project: Record<string, any>,
}

function ProjectModal({ handleClose, isOpen, project }: ProjectModalProps) {
    return (
        <Dialog open={isOpen} onClose={handleClose} sx={{ borderRadius: "20px" }}>
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
                            {contact.typeName === "YouTube" && <YouTubeIcon/>}
                            {contact.typeName === "Instagram" && <InstagramIcon/>}
                            {(contact.typeName === "Twitter" || contact.typeName === "X") && <X/>}
                            {contact.typeName === "LinkedIn" && <LinkedInIcon/>}
                            {contact.typeName === "TikTok" && <TikTokIcon/>}
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
