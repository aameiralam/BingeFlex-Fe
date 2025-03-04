import { Box, Button, FormControl, Input, InputLabel, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import registervideo from "../assets/registervideo.mp4"; // Import the video correctly

function Register() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            role: "USER"
        },
        onSubmit: async (values) => {
            // Handle form submission
            const request = await fetch(import.meta.env.VITE_API_URL + "/auth/register", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (!request.ok) {
                const errorMessage = await request.text();
                throw new Error(errorMessage);
            } else {
                alert("New User has been created");
                navigate("/login");
            }
        }
    });

    return (
        <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom:0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
            >
                <source src={registervideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

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
                    zIndex: 1, // Ensure the form is in front of the video
                    position: 'relative',
                    padding: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.01)', // Optional overlay for readability
                    borderRadius: 2,
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: 3, fontFamily: "Montserrat"}}>
                   
                </Typography>

                <FormControl sx={{ marginBottom: 2, width: '300px' }}>
                    <InputLabel htmlFor="email"> Enter your Email</InputLabel>
                    <Input
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        fullWidth
                    />
                </FormControl>

                <FormControl sx={{ marginBottom: 2, width: '300px' }}>
                    <InputLabel htmlFor="password"> Enter your Password</InputLabel>
                    <Input
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        fullWidth
                    />
                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ width: '300px', padding: '10px 0', marginBottom: 2 }}
                >
                    Sign Up
                </Button>

                {/* Login button */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: '300px', padding: '10px 0' }}
                    onClick={() => navigate("/login")}
                >
                    Already have an account? Log In
                </Button>
            </Box>
        </Box>
    );
}

export default Register;



