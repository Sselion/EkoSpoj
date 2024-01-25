import React, { useState } from "react";
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";


interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isErrored, setIsErrored] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;

        setFormData((prevData: FormData) => ({
            ...prevData, [name]: value
        }))
    };

    // TODO POST request na BE
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        fetch("https://ekospoj.cz/api/MessageSend", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response && response.ok) {
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                    });
                    setIsSubmitted(true);
                    setIsErrored(false);
                } else {
                    throw new Error('Message was not sent');
                }
            })
            .catch((error) => {
                setIsSubmitted(false);
                setIsErrored(true);
                console.error('An error occurred:', error.message);
            });
    };

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isFormValid = formData.name.trim() !== "" && isEmailValid && formData.email !== '' && formData.message.trim() !== "";

    return (
        <Box sx={{ p: 3, textAlign: "center", maxWidth: "600px", margin: '0 auto', mt: 10 }}>
            <Paper sx={{ p: 3 }}>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Typography variant="h4">Kontaktní formulář</Typography>
                </Box>
                <Stack direction="row" flexWrap="wrap">
                    <Box flexGrow={1} mr={{ sm: 1 }} sx={{ mb: 2 }}>
                        <TextField
                            id="contact-name"
                            label="Jméno"
                            name="name"
                            sx={{ width: '100%' }}
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </Box>
                    <Box flexGrow={1} sx={{ mb: 2 }}>
                        <TextField
                            id="contact-email"
                            label="E-mail"
                            name="email"
                            sx={{ width: '100%' }}
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </Box>
                </Stack>
                <Stack spacing={{ xs: 2, sm: 2 }}>
                    <TextField
                        id="contact-subject"
                        label="Předmět"
                        name="subject"
                        onChange={handleChange}
                        value={formData.subject}
                        autoComplete="new-password"
                    />
                    <TextField
                        id="contact-message"
                        label="Vaše zpráva"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        multiline
                        rows={7}
                    />
                </Stack>
                <Button type="submit" disabled={!isFormValid} onClick={handleSubmit}
                        sx={{
                            mt: 2,
                            backgroundColor: "#83C089",
                            color: "white"
                        }}
                >
                    <Typography variant="subtitle1" display="block">
                        Odeslat
                    </Typography>
                </Button>
                {(isSubmitted || isErrored) && (
                    <Box sx={{ mt: 1 }}>
                        <Typography color={isErrored ? "red" : "black"}>
                            { isErrored ? "Chyba při odesílání!" : "Zpráva byla odeslána!"}
                        </Typography>
                    </Box>
                )}
            </Paper>
        </Box>
    )
}

export default ContactPage;