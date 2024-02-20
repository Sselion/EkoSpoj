import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Type } from "./types";

function TagForm({type}: Type) {
    const [newTag, setNewTag] = useState<string>("");
    const [isErrored, setIsErrored] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNewTag(value);
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        // TODO: vložit správnou API, upravit strukturu statetu
        if (newTag !== "") {
            fetch("https://ekospoj.cz/adm/AdmCategory", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTag),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Chyba při odesílání');
                    }
                    return response.json();
                })
                .then(json => {
                    setNewTag("");
                    setIsErrored(false);
                    setIsSubmitted(true);
                })
                .catch(error => {
                    console.error('An error occurred:', error.message);
                    setIsSubmitted(false);
                    setIsErrored(true);
                });
        }
    }

    return (
        <>
            <Typography variant="h4" display="block" gutterBottom>
                {type} tag
            </Typography>
            <TextField
                label="Název tagu"
                name="name"
                value={newTag}
                onChange={handleTagChange}
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

export default TagForm;