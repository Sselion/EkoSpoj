import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

interface NewCategory {
    name: string;
    shortName: string;
}
function AddCategoryForm() {

    const [newCategory, setNewCategory] = useState<NewCategory>({
        name: "",
        shortName: ""
    })
    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;

        setNewCategory((prevData: NewCategory) => ({
            ...prevData, [name]: value
        }))
    };
    return (
        <>
            <TextField
                id="category-name"
                label="Název kategorie"
                name="name"
                value={newCategory.name}
                onChange={handleCategoryChange}
                fullWidth
            />
            <TextField
                id="short-name"
                label="shortName"
                name="shortName"
                value={newCategory.shortName}
                onChange={handleCategoryChange}
                fullWidth
            />
            <Button type="submit"
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
        </>
    )
}

export default AddCategoryForm;