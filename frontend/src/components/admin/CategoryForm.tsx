import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { NewCategory } from "./types";
import { Type } from "./types";

function CategoryForm({type}: Type) {

    const [newCategory, setNewCategory] = useState<NewCategory>({
        name: "",
        shortName: ""
    });
    const [isErrored, setIsErrored] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;

        setNewCategory((prevData: NewCategory) => ({
            ...prevData, [name]: value
        }))
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (newCategory.name !== "" && newCategory.shortName !== "") {

            fetch("https://ekospoj.cz/adm/AdmCategory", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCategory),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Chyba při odesílání');
                    }
                    return response.json();
                })
                .then(json => {
                    setNewCategory({
                        name: "",
                        shortName: ""
                    });
                    setIsErrored(false);
                    setIsSubmitted(true);
                })
                .catch(error => {
                    console.error('An error occurred:', error.message);
                    setIsSubmitted(false);
                    setIsErrored(true);
                });
        }
    };


    return (
        <>
            <Typography variant="h4" display="block" gutterBottom>
                {type} kategorii
            </Typography>
            <TextField
                label="Název kategorie"
                name="name"
                value={newCategory.name}
                onChange={handleCategoryChange}
                fullWidth
                disabled={type === 'Smazat'}
                sx={{ backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
            />
            <TextField
                label="shortName"
                name="shortName"
                value={newCategory.shortName}
                onChange={handleCategoryChange}
                fullWidth
                disabled={type === 'Smazat'}
                sx={{ backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
            />
            <Button type="submit" onClick={handleSubmit}
                    sx={{
                        mt: 2,
                        backgroundColor: "#83C089",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#83C089"
                        }
                    }}
            >
                <Typography variant="subtitle1" display="block">
                    Odeslat
                </Typography>
            </Button>
            {(isSubmitted || isErrored) && (
                <Box sx={{ mt: 1 }}>
                    <Typography color={isErrored ? "red" : "green"} fontWeight="bold">
                        {isErrored ? "Chyba při odesílání!" : "Úspěšně odesláno!"}
                    </Typography>
                </Box>
            )}

        </>
    )
}

export default CategoryForm;