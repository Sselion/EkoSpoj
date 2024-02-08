import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Stack,
    Typography,
    Paper,
} from "@mui/material";
import LoginForm from "./LoginForm";
import NavButton from "./NavButton";
import { AdminProps } from "./types";
import AddCategoryForm from "./AddCategoryForm";
import AddProjectForm from "./AddProjectForm";

function AdminPage({ categories, fetchCategories }: AdminProps) {
    const [isLogged, setIsLogged] = useState(true);
    const [categoryArr, setCategoryArr] = useState<string[]>([]);
    const [selectedForm, setSelectedForm] = useState<number>(0);
    const [projectTags, setProjectTags] = useState<string[]>([]);


    useEffect(() => {
        setCategoryArr(categories.map(category => category.name))
    }, [categories]);


    useEffect(() => {
        fetch("https://ekospoj.cz/adm/AdmTag", {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                setProjectTags(json.map((tag: Record<string, string>) => tag.name));
            })
            .catch(error => {
                window.alert(error);
            });
    }, []);

// TODO: create login function
    function handleLogin() {

    }
    const handleButtonClick = (formNumber: number) => {
        setSelectedForm(formNumber);
    };

    return (
        <Box sx={{ textAlign: "center", maxWidth: "900px", margin: '0 auto', mb: 5 }}>
            {!isLogged && (
                <LoginForm handleLogin={handleLogin}/>
            )}

            {isLogged && (
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 11,
                    textAlign: "center",
                    justifyContent: 'center'
                }}>
                    <Grid container columnSpacing={{ xs: 2 }} sx={{ justifyContent: 'center' }}>
                        <Grid item>
                            <NavButton type="Přidat kategorii" onClick={() => handleButtonClick(1)}/>
                        </Grid>
                        <Grid item>
                            <NavButton type="Přidat projekt" onClick={() => handleButtonClick(2)}/>
                        </Grid>
                    </Grid>

                    {selectedForm === 1 && (
                        <Stack direction="column"
                               sx={{ mt: 5, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h4" display="block" gutterBottom>
                                Přidat kategorii
                            </Typography>
                            <Paper sx={{ p: 3, px: 5, width: "600px" }}>
                                <Stack spacing={2}>
                                    <AddCategoryForm/>
                                </Stack>
                            </Paper>
                        </Stack>
                    )}
                    {selectedForm === 2 && (
                        <Stack direction="column"
                               sx={{ mt: 5, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h4" display="block" gutterBottom>
                                Přidat projekt
                            </Typography>
                            <Paper sx={{ p: 3, px: 5, width: "600px" }}>
                                <Stack spacing={2}>
                                    <AddProjectForm categoryArr={categoryArr} projectTags={projectTags}/>
                                </Stack>
                            </Paper>
                        </Stack>
                    )}
                </Box>
            )}
        </Box>
    )
}

export default AdminPage;