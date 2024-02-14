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
import CategoryForm from "./CategoryForm";
import ProjectForm from "./ProjectForm";
import TagForm from "./TagForm";

function AdminPage({ categories, fetchCategories }: AdminProps) {
    const [isLogged, setIsLogged] = useState(true);
    const [categoryArr, setCategoryArr] = useState<string[]>([]);
    const [selectedForm, setSelectedForm] = useState<number>(0);
    const [projectTags, setProjectTags] = useState<string[]>([]);
    const [selection, setSelection] = useState<number>(0);

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

    const handleSelectionClick= (selectionNumber: number) => {
        setSelection(selectionNumber)
        setSelectedForm(0);
    }
    const handleDetailButtonClick = (formNumber: number) => {
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
                        <Grid container columnSpacing={{ xs: 2 }} sx={{ justifyContent: 'center', mb: 2 }}>
                            <Grid item>
                                <NavButton type="Přidat" onClick={() => handleSelectionClick(1)}/>
                            </Grid>
                            <Grid item>
                                <NavButton type="Upravit" onClick={() => handleSelectionClick(2)} />
                            </Grid>
                            <Grid item>
                                <NavButton type="Smazat" onClick={() => handleSelectionClick(3)}/>
                            </Grid>

                        </Grid>

                        {selection === 1 &&
                        (<Grid container columnSpacing={{ xs: 2 }} sx={{ justifyContent: 'center' }}>
                            <Grid item>
                                <NavButton type="Přidat kategorii" onClick={() => handleDetailButtonClick(1)}/>
                            </Grid>
                            <Grid item>
                                <NavButton type="Přidat tag" onClick={() => handleDetailButtonClick(2)}/>
                            </Grid>
                            <Grid item>
                                <NavButton type="Přidat projekt" onClick={() => handleDetailButtonClick(3)}/>
                            </Grid>
                        </Grid>)
                        }
                    </Grid>

                    {selectedForm !== 0 && (
                        <Stack direction="column"
                               sx={{ mt: 5, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                            <Paper sx={{ p: 3, px: 5, width: "600px" }}>
                                <Stack spacing={2}>
                                    {selectedForm === 1 && (
                                        <CategoryForm/>
                                    )}
                                    {selectedForm === 2 && (
                                        <TagForm/>
                                    )}
                                    {selectedForm === 3 && (
                                        <ProjectForm categoryArr={categoryArr} projectTags={projectTags}/>
                                    )}
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