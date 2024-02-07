import React, { useState } from "react";
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


import { ProjectFormProps } from "./types";
import RemoveButton from "./RemoveButton";


function AddProjectForm({ categoryArr, projectTags }: ProjectFormProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedContactType, setSelectedContactType] = useState<string>('');
    const [addedContacts, setAddedContacts] = useState<string[]>([]);

    const handleCategoryChange = (event: SelectChangeEvent<typeof selectedCategories>) => {
        const value = event.target.value;
        setSelectedCategories(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleTagChange = (event: SelectChangeEvent<typeof selectedTags>) => {
        const value = event.target.value;
        setSelectedTags(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleContactTypeChange = (event: SelectChangeEvent<typeof selectedContactType>) => {
        const value = event.target.value;
        setSelectedContactType(value);
    };

    const handleContactAdd = () => {
        if (selectedContactType && !addedContacts.includes(selectedContactType)) {
            setAddedContacts(prevContacts => [...prevContacts, selectedContactType]);
        }

    };

    const handleContactRemove = (contact: string) => {
        setAddedContacts(prevValue => prevValue.filter(addedContacts => addedContacts !== contact))
    };

    const contactTypes= ["Facebook", "Youtube", "Instagram", "X", "LinkedIn", "TikTok"];

    return (
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
            <FormControl>
                <InputLabel id="admin-tag-input">Tagy</InputLabel>
                <Select
                    labelId="admin-tag-input"
                    id="admin-tag-input"
                    multiple
                    value={selectedTags}
                    onChange={handleTagChange}
                    input={<OutlinedInput label="Tagy"/>}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {projectTags.map((tag) => (
                        <MenuItem key={tag} value={tag}>
                            <Checkbox checked={selectedTags.includes(tag)}/>
                            <ListItemText primary={tag}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="admin-category-input">Kategorie</InputLabel>
                <Select
                    labelId="admin-category-input"
                    id="admin-category-input"
                    multiple
                    value={selectedCategories}
                    onChange={handleCategoryChange}
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

            <Divider/>
            {/*Kontakty*/}
            <Typography variant="body1">
                Kontakty
            </Typography>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>}
                   spacing={2} justifyContent="space-between">

                <TextField
                    id="contact-web"
                    label="Web"
                    name="contact-web"
                    sx={{ width: "544px" }}
                />
            </Stack>

            {/*Volitelné kontakty*/}
            {addedContacts.map((contact) => (
                <Stack key={contact} direction="row"
                       justifyContent="space-between"
                       alignItems="center"
                       spacing={1}
                >
                    <TextField
                        label={contact}
                        name={`contact-${contact.toLowerCase()}`}
                        fullWidth
                    />
                    <RemoveButton removeItem={() => handleContactRemove(contact)}/>
                </Stack>
            ))}

            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left", pt: 3 }}>
                <FormControl sx={{ width: "200px" }}>
                    <InputLabel id="contact-type-select">Typ kontaktu</InputLabel>
                    <Select
                        labelId="contact-type-select"
                        id="contact-type-select"
                        label="Typ kontaktu"
                        value={selectedContactType}
                        onChange={handleContactTypeChange}
                    >
                        {contactTypes.map((contact) => (
                            !addedContacts.includes(contact) && (
                                <MenuItem key={contact} value={contact}>{contact}</MenuItem>
                           ))
                        )}
                    </Select>
                </FormControl>
                <Button onClick={handleContactAdd}
                        sx={{
                            ml: 5,
                            backgroundColor: "#83C089",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#83C089"
                            },
                            width: "300px"
                        }}
                >
                    <Typography variant="subtitle1" display="bloc">
                        Přidat kontakt
                    </Typography>
                </Button>
            </Box>

            <Divider />
            <Button type="submit"
                    sx={{
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