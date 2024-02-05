import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FormData, LoginFormProps } from "./types";


function LoginForm({handleLogin}: LoginFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;

        setFormData((prevData: FormData) => ({
            ...prevData, [name]: value
        }))
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
        setFormData({
            name: "",
            password: ""
        });
    }

    return (
        <Box sx={{ p: 3, textAlign: "center", maxWidth: "400px", margin: '0 auto', mt: 15 }}>
            <Stack spacing={1}>
                <TextField
                    id="login-name"
                    label="Login"
                    name="name"
                    sx={{ width: '100%' }}
                    onChange={handleChange}
                    value={formData.name}
                />
                <TextField
                    id="login-password"
                    label="Password"
                    name="password"
                    type="password"
                    sx={{ width: '100%' }}
                    onChange={handleChange}
                    value={formData.password}
                />
            </Stack>
            <Button type="submit" onClick={handleSubmit}
                    sx={{
                        mt: 2,
                        backgroundColor: "#83C089",
                        color: "white"
                    }}
            >
                <Typography variant="subtitle1" display="block">
                    Přihlásit se
                </Typography>
            </Button>
        </Box>
    )
}

export default LoginForm;