
import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
    Container,
    Paper,
    TextField,
    Button,
    Typography,
    CssBaseline,
} from '@mui/material';
import { Lock, Password } from '@mui/icons-material';
import Swal from 'sweetalert2'

function Home() {

    const [userid, setuserid] = React.useState("");
    const [pass, setpassword] = React.useState("");

    const Login = () => {

        console.log(userid);
        console.log(pass);

        if ((userid == '' || undefined || null) && (pass == '' || undefined || null)) {

            Swal.fire('error', 'add your userid and pass ', 'error')

        }
        else {
            Swal.fire({
                icon: "warning",
                title: "Login",
                text: 'Are you sure?',
                confirmButtonText: "Sure",
                cancelButtonText: 'No',
                cancelButtonColor: 'red',
                showCancelButton: true,
            }).then((e: any) => {
                if (e.isConfirmed) {
                    window.location.href = "/root";
                    sessionStorage.setItem('userid', 'toey')
                    sessionStorage.setItem('password', '1234')
                }
            })
        }
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
                        onChange={(e: any) => { setuserid(e.target.value) }}
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
                        onChange={(e: any) => { setpassword(e.target.value) }}
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