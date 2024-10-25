



import { Box, FormControl, InputLabel, Input, Button, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            mutation.mutate(values);
        }
    });

    const LoginUser = async (value) => {
        const request = await fetch(import.meta.env.VITE_API_URL + "/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(value)
        });

        if (!request.ok) {
            const errorMessage = await request.text();
            throw new Error(errorMessage);
        } else {
            return request.text(); // Assuming the token is returned as plain text
        }
    };

    const mutation = useMutation({
        mutationFn: LoginUser,
        onSuccess: (data) => {
            if (data) {
                sessionStorage.setItem("Authorization", data);
                console.log(sessionStorage.getItem("Authorization"));
                alert("Login Successful");
                navigate("/home");
            } else {
                alert("Login Successful but no token received");
            }
        },
        onError: (error) => {
            alert(`Login Unsuccessful: ${error.message}`);
        }
    });

    return (
        <Box sx={{ 
            position: 'relative', 
            height: '100vh', 
            overflow: 'hidden'
        }}>
            {/* Background YouTube Video */}
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UhVjp48U2Oc?autoplay=1&loop=1&playlist=UhVjp48U2Oc&mute=1&controls=0&showinfo=0&modestbranding=1"
                title="YouTube Video"
                frameBorder="0"
                style={{
                    position: 'absolute',
                    top: '50%',  // Center vertically
                    left: '50%', // Center horizontally
                    width: '120%', // Adjust width for zoom effect
                    height: '120%', // Adjust height for zoom effect
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%) scale(1.2)', // Center and zoom
                    zIndex: -1 // Ensure the video is behind the form
                }}
                allow="autoplay; encrypted-media"
            />
            
            {/* Form Content */}
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    zIndex: 1, // Ensure the form is in front of the background video
                    position: 'relative',
                    padding: 3,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '400px',
                        gap: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Overlay for better readability
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: 3 }}>
                        Log In 
                    </Typography>

                    <FormControl fullWidth>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ padding: '10px 0', fontWeight: 'bold' }}
                    >
                        Log In
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: '300px', padding: '10px 0' }}
                        onClick={() => navigate("/register")}
                    >
                        Do not have an account? Sign Up
                    </Button>

                    {/* Are you an admin? Button
                    <Button */}
                        {/* variant="contained"
                        color="secondary"
                        sx={{ width: '300px', padding: '10px 0' }}
                        onClick={() => navigate("/adminLogin")}
                    >
                        Are you an admin?
                    </Button> */}
                </Box>
            </Box>
        </Box>
    );
}

export default Login;
