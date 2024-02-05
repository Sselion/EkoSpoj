import {
    Box, Button,
    Checkbox, Divider,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select, SelectChangeEvent, Stack,
    TextField, Typography
} from "@mui/material";
import React, { useState } from "react";

function AddProjectForm({ categoryArr }: { categoryArr: string[] }) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof selectedCategories>) => {
        const value = event.target.value;
        setSelectedCategories(
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return(
        <>
            <TextField
                id="project-name"
                label="Název projektu"
                name="project-name"
                fullWidth
            />
            <TextField
                id="short-description"
                label="Krátký popisek"
                name="short-description"
                fullWidth
                multiline
            />
            <TextField
                id="description"
                label="Popisek"
                name="description"
                fullWidth
                multiline
            />
            <TextField
                id="project-logo-path"
                label="Cesta k logu"
                name="project-logo-path"
                fullWidth
            />
            <TextField
                id="tags-name"
                label="Tagy (nutno oddělit čárkou!)"
                name="tags-name"
                fullWidth
            />
            <FormControl>
                <InputLabel id="admin-category-input">Kategorie</InputLabel>
                <Select
                    labelId="admin-category-input"
                    id="admin-category-input"
                    multiple
                    value={selectedCategories}
                    onChange={handleChange}
                    input={<OutlinedInput label="Kategorie"/>}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {categoryArr.map((category) => (
                        <MenuItem key={category} value={category}>
                            <Checkbox checked={selectedCategories.includes(category)}/>
                            <ListItemText primary={category}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Typography variant="body1">
                Kontakty
            </Typography>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>}
                   spacing={2} justifyContent="space-between">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography>
                        Web
                    </Typography>
                </Box>
                <TextField
                    id="contact-web"
                    label="Web"
                    name="contact-web"
                    sx={{ width: "480px" }}
                />
            </Stack>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>}
                   spacing={2} justifyContent="space-between">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography>
                        Facebook
                    </Typography>
                </Box>
                <TextField
                    id="contact-fb"
                    label="Facebook"
                    name="contact-fb"
                    sx={{ width: "480px" }}
                />
            </Stack>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>}
                   spacing={2} justifyContent="space-between">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography>
                        Instagram
                    </Typography>
                </Box>
                <TextField
                    id="contact-instagram"
                    label="Instagram"
                    name="contact-instagram"
                    sx={{ width: "480px" }}
                />
            </Stack>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>}
                   spacing={2} justifyContent="space-between">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography>
                        YouTube
                    </Typography>
                </Box>
                <TextField
                    id="contact-youtube"
                    label="YouTube"
                    name="contact-youtube"
                    sx={{ width: "480px" }}
                />
            </Stack>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>}
                   spacing={2} justifyContent="space-between">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography>
                        X
                    </Typography>
                </Box>
                <TextField
                    id="contact-x"
                    label="X"
                    name="contact-x"
                    sx={{ width: "480px" }}
                />
            </Stack>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>}
                   spacing={2} justifyContent="space-between">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography>
                        LinkedIn
                    </Typography>
                </Box>
                <TextField
                    id="contact-linkedin"
                    label="LinkedIn"
                    name="contact-linkedin"
                    fullWidth
                    sx={{ width: "480px" }}
                />
            </Stack>
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

export default AddProjectForm;