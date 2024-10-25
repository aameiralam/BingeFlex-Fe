// import { Box, FormControl, InputLabel, Input, Button, Typography } from "@mui/material";
// import { useMutation } from "@tanstack/react-query";
// import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";

// function Login() {
//     const navigate = useNavigate();

//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: ''
//         },
//         onSubmit: (values) => {
//             mutation.mutate(values);
//         }
//     });

//     const LoginUser = async (value) => {
//         const request = await fetch(import.meta.env.VITE_API_URL + "/auth/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(value)
//         });

//         if (!request.ok) {
//             const errorMessage = await request.text();
//             throw new Error(errorMessage);
//         } else {
//             return request.text(); // Assuming the token is returned as plain text
//         }
//     };

//     const mutation = useMutation({
//         mutationFn: LoginUser,
//         onSuccess: (data) => {
//             if (data) {
//                 sessionStorage.setItem("Authorization", data);
//                 console.log(sessionStorage.getItem("Authorization"));
//                 alert("Login Successful");
//                 navigate("/home");
//             } else {
//                 alert("Login Successful but no token received");
//             }

            
//         },
//         onError: (error) => {
//             alert(`Login Unsuccessful: ${error.message}`);
//         }
//     });

//     return (
//         <Box sx={{ 
//             position: 'relative', 
//             height: '100vh', 
//             overflow: 'hidden'
//         }}>
           
            
//             {/* Form Content */}
//             <Box
//                 component="form"
//                 onSubmit={formik.handleSubmit}
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     height: '100vh',
//                     zIndex: 1, // Ensure the form is in front of the background video
//                     position: 'relative',
//                     padding: 3,
//                 }}
//             >
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         width: '100%',
//                         maxWidth: '400px',
//                         gap: 3,
//                         backgroundColor: 'rgba(255, 255, 255, 0.5)', // Overlay for better readability
//                         padding: 4,
//                         borderRadius: 2,
//                         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                     }}
//                 >
//                     <Typography variant="h4" sx={{ marginBottom: 3 }}>
//                         Admin Log In 
//                     </Typography>

//                     <FormControl fullWidth>
//                         <InputLabel htmlFor="email">Email</InputLabel>
//                         <Input
//                             id="email"
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                     </FormControl>

//                     <FormControl fullWidth>
//                         <InputLabel htmlFor="password">Password</InputLabel>
//                         <Input
//                             id="password"
//                             type="password"
//                             value={formik.values.password}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                     </FormControl>

//                     <Button
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         fullWidth
//                         sx={{ padding: '10px 0', fontWeight: 'bold' }}
//                     >
//                         Log In
//                     </Button>
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         fullWidth
//                         sx={{ padding: '10px 0', fontWeight: 'bold' }}
//                         onClick={() => navigate("/login")}
                        
//                     >
//                         Go Back
//                     </Button>

                   
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default Login;


// // import { Box, FormControl, InputLabel, Input, Button, Typography } from "@mui/material";
// // import { useMutation } from "@tanstack/react-query";
// // import { useFormik } from "formik";
// // import { useNavigate } from "react-router-dom";
// // import { jwtDecode } from "jwt-decode";

// // function Login() {
// //     const navigate = useNavigate();

// //     const formik = useFormik({
// //         initialValues: {
// //             email: '',
// //             password: ''
// //         },
// //         onSubmit: (values) => {
// //             mutation.mutate(values);
// //         }
// //     });

// //     const LoginUser = async (value) => {
// //         const request = await fetch(import.meta.env.VITE_API_URL + "/auth/login", {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json"
// //             },
// //             body: JSON.stringify(value)
// //         });

// //         if (!request.ok) {
// //             const errorMessage = await request.text();
// //             throw new Error(errorMessage);
// //         } else {
// //             return request.text(); 
// //         }
// //     };

// //     const mutation = useMutation({
// //         mutationFn: LoginUser,
// //         onSuccess: (data) => {
// //             console.log(data)
// //             if (data) {
// //                 sessionStorage.setItem("Authorization", data);
// //                 console.log(sessionStorage.getItem("Authorization"));
// //                 const decodedJWT = jwtDecode(data);
// //                 if (decodedJWT.role === "ADMIN") {
// //                     alert("Login Successful as Admin");
// //                     navigate("/home"); 
// //                 } else {
// //                     alert("Login Successful but you do not have admin access");
// //                     navigate("/login"); 
// //                 }
// //             } else {
// //                 alert("Login Successful but no token or role received");
// //             }
// //         },
// //         onError: (error) => {
// //             alert(`Login Unsuccessful: ${error.message}`);
// //         }
// //     });

// //     return (
// //         <Box sx={{ 
// //             position: 'relative', 
// //             height: '100vh', 
// //             overflow: 'hidden'
// //         }}>
          
// //             <Box
// //                 component="form"
// //                 onSubmit={formik.handleSubmit}
// //                 sx={{
// //                     display: 'flex',
// //                     flexDirection: 'column',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     height: '100vh',
// //                     zIndex: 1, // Ensure the form is in front of the background video
// //                     position: 'relative',
// //                     padding: 3,
// //                 }}
// //             >
// //                 <Box
// //                     sx={{
// //                         display: 'flex',
// //                         flexDirection: 'column',
// //                         alignItems: 'center',
// //                         width: '100%',
// //                         maxWidth: '400px',
// //                         gap: 3,
// //                         backgroundColor: 'rgba(255, 255, 255, 0.5)', // Overlay for better readability
// //                         padding: 4,
// //                         borderRadius: 2,
// //                         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
// //                     }}
// //                 >
// //                     <Typography variant="h4" sx={{ marginBottom: 3 }}>
// //                         Admin Log In 
// //                     </Typography>

// //                     <FormControl fullWidth>
// //                         <InputLabel htmlFor="email">Email</InputLabel>
// //                         <Input
// //                             id="email"
// //                             value={formik.values.email}
// //                             onChange={formik.handleChange}
// //                             onBlur={formik.handleBlur}
// //                         />
// //                     </FormControl>

// //                     <FormControl fullWidth>
// //                         <InputLabel htmlFor="password">Password</InputLabel>
// //                         <Input
// //                             id="password"
// //                             type="password"
// //                             value={formik.values.password}
// //                             onChange={formik.handleChange}
// //                             onBlur={formik.handleBlur}
// //                         />
// //                     </FormControl>

// //                     <Button
// //                         type="submit"
// //                         variant="contained"
// //                         color="primary"
// //                         fullWidth
// //                         sx={{ padding: '10px 0', fontWeight: 'bold' }}
// //                     >
// //                         Log In
// //                     </Button>
// //                     <Button
// //                         variant="contained"
// //                         color="primary"
// //                         fullWidth
// //                         sx={{ padding: '10px 0', fontWeight: 'bold' }}
// //                         onClick={() => navigate("/login")}
// //                     >
// //                         Go Back
// //                     </Button>
// //                 </Box>
// //             </Box>
// //         </Box>
// //     );
// // }

// // export default Login;
