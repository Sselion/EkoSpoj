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
}

const categorySelection = ["Odpadové hospodářství", "Analýzy", "Zpravodajství", "Transformace"];

function ProjectModal({handleClose, isOpen}: ProjectModalProps) {

    return (
        <Dialog open={isOpen} sx={{borderRadius: "20px"}}>
            <Box p={3} px={5}>
                <Typography variant="h2" sx={{textAlign: "center"}}>
                    Název projektu
                </Typography>
                <Box mt={1} sx={{
                    display: "flex", flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    alignItems: "center",
                }}>
                    {categorySelection.map((category, index) => (<ProjectTag key={index} tag={category.name}/>))}
                </Box>
                <Box mt={2}>
                    <Typography>
                        Tady budou odkazy na média
                    </Typography>
                </Box>
                <Box mt={4} mb={3}>
                    <Typography variant="body1">
                        Tady budou detailní nformace o projektu. Tady budou detailní nformace o projektu.Tady budou
                        detailní nformace o projektu.Tady budou detailní nformace o projektu.Tady budou detailní
                        nformace o projektu.Tady budou detailní nformace o projektu.Tady budou detailní nformace o
                        projektu.Tady budou detailní nformace o projektu.Tady budou detailní nformace o projektu.Tady
                        budou detailní nformace o projektu.Tady budou detailní nformace o projektu.
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
