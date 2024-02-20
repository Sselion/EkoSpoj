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


import { ProjectFormProps, ProjectFormData } from "./types";
import RemoveButton from "./RemoveButton";


function ProjectForm({ categoryArr, projectTags, type }: ProjectFormProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedContactType, setSelectedContactType] = useState<string>('');
    const [addedContacts, setAddedContacts] = useState<string[]>([]);
    const [formData, setFormData] = useState<ProjectFormData>({
        name: "",
        shortDescription: "",
        description: "",
        projectLogoPath: "",
        web: ""
    });
    const [contactData, setContactData] = useState<Record<string, string>>({});
    const [isErrored, setIsErrored] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { name, value } = event.target;

        setFormData((prevValue: ProjectFormData) => ({ ...prevValue, [name]: value }))
    };

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

    const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        setContactData(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    };

    const handleContactAdd = () => {
        if (selectedContactType && !addedContacts.includes(selectedContactType)) {
            const contact = selectedContactType;
            setSelectedContactType("");
            setAddedContacts(prevContacts => [...prevContacts, selectedContactType]);
        }
    };

    const handleContactRemove = (contact: string) => {
        setAddedContacts(prevValue => prevValue.filter(addedContacts => addedContacts !== contact));
        setSelectedContactType("");
        setContactData(prevValue => ({
            ...prevValue,
            [contact]: ""
        }));
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(formData.name !== "") {

        const formattedContacts = Object.entries(contactData).map(([key, value]) => ({
            TypeName: key,
            Value: value
        }));
        const newProjectData =
            {
                Name: formData.name,
                Description: formData.description,
                ShortDescription: formData.shortDescription,
                logoPath: formData.projectLogoPath,
                Tags: selectedTags,
                Categories: selectedCategories,
                Contacts: formattedContacts
            };
        console.log(newProjectData);
        setFormData({
            name: "",
            shortDescription: "",
            description: "",
            projectLogoPath: "",
            web: ""
        });
        setSelectedTags([]);
        setSelectedCategories([]);
        setContactData({});

        fetch("https://ekospoj.cz/adm/AdmProject", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProjectData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Chyba při odesílání');
                }
                return response.json();
            })
            .then(json => {
                setFormData({
                    name: "",
                    shortDescription: "",
                    description: "",
                    projectLogoPath: "",
                    web: ""
                });
                setSelectedTags([]);
                setSelectedCategories([]);
                setContactData({});
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


    const contactTypes = ["Facebook", "Youtube", "Instagram", "X", "LinkedIn", "TikTok"];

    return (
        <>
            <Typography variant="h4" display="block" gutterBottom>
                {type} projekt
            </Typography>
            <TextField
                label="Název projektu"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleFormChange}
                disabled={type === 'Smazat'}
                sx={{ backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
            />
            <TextField
                label="Krátký popisek"
                name="shortDescription"
                fullWidth
                multiline
                value={formData.shortDescription}
                onChange={handleFormChange}
                disabled={type === 'Smazat'}
                sx={{ backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
            />
            <TextField
                label="Popisek"
                name="description"
                fullWidth
                multiline
                value={formData.description}
                onChange={handleFormChange}
                disabled={type === 'Smazat'}
                sx={{ backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
            />
            <TextField
                label="Cesta k logu"
                name="projectLogoPath"
                fullWidth
                value={formData.projectLogoPath}
                onChange={handleFormChange}
                disabled={type === 'Smazat'}
                sx={{ backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
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
                    disabled={type === 'Smazat'}
                    sx={{ backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
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
                    disabled={type === 'Smazat'}
                    sx={{ backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
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
                    label="Web"
                    name="web"
                    value={formData.web}
                    onChange={handleFormChange}
                    disabled={type === 'Smazat'}
                    sx={{width: "544px", backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
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
                        name={contact}
                        fullWidth
                        value={contactData[contact] || ''}
                        onChange={handleContactChange}
                        disabled={type === 'Smazat'}
                        sx={{backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
                    />
                    <RemoveButton removeItem={() => handleContactRemove(contact)} type={type}/>
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
                        disabled={type === 'Smazat'}
                        sx={{backgroundColor: type === 'Smazat' ? '#f5f5f5' : 'transparent' }}
                    >
                        {contactTypes.map((contact) => (
                                !addedContacts.includes(contact) && (
                                    <MenuItem key={contact} value={contact}>{contact}</MenuItem>
                                ))
                        )}
                    </Select>
                </FormControl>
                <Button onClick={handleContactAdd} disabled={type === 'Smazat'}
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

            <Divider/>
            <Button type="submit" onClick={handleSubmit}
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
            {(isSubmitted || isErrored) && (
                <Box sx={{ mt: 1 }}>
                    <Typography color={isErrored ? "red" : "green"} fontWeight="bold">
                        { isErrored ? "Chyba při odesílání!" : "Úspěšně odesláno!"}
                    </Typography>
                </Box>
            )}
        </>
    )
}

export default ProjectForm;