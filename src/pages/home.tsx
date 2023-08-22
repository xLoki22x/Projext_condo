
import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import {
    Container,
    Paper,
    TextField,
    Button,
    Typography,
    CssBaseline,
} from '@mui/material';
import { Lock } from '@mui/icons-material';
import Swal from 'sweetalert2'

function Home() {

    const Login = () => {
        Swal.fire({
            icon: "warning",
            title: "แจ้งเตือน",
            text: 'Are you sure?',
            confirmButtonText: "ตกลง",
        }).then((e: any) => {
            if (e.isConfirmed) {
                window.location.href = "/root";
            }
        })
    }

    return (
        <Container component="main" maxWidth="xs" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <CssBaseline />
            <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Lock sx={{ fontSize: '64px', color: 'primary.main' }} />
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>

                <form>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />


                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, color: 'white' }}
                        onClick={() => { Login() }}
                    >
                        Sign In
                    </Button>

                </form>

            </Paper>
        </Container>

    );
}

export default Home;