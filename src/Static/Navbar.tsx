


import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { styled } from '@mui/system'; // Import styled for custom styling

// Custom styles using MUI's styled function
const StyledAppBar = styled(AppBar)({
  backgroundImage: "linear-gradient(to right, #1a237e, #5c6bc0, #8e99f3)",
  boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
});

const StyledButton = styled(Button)({
  color: "white",
  fontWeight: "bold",
  letterSpacing: "0.5px",
  transition: "all 0.3s ease",
  '&:hover': {
    backgroundColor: "#ffffff33",
    transform: "scale(1.1)",
  },
});

const BrandTypography = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  color: "#D9C7A3",
  cursor: "pointer",
  '&:hover': {
    color: "#ffd740",
  },
});

export const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Logout function to clear session and navigate to login page
  const handleLogout = () => {
    sessionStorage.removeItem("Authorization");
    alert("Logged out successfully");
    navigate("/login"); // Redirect to login page
  };

  const handleLogin = () => {
    alert("Redirecting to the Login page");
    navigate("/login"); // Redirect to login page
  };

  const handleRegister = () => {
    alert("Redirecting to the Sign up page");
    navigate("/register"); // Redirect to register page
  };

  const handleHome = () => {
    navigate("/home");
  };


  const handleMovies = () => {
    navigate("/");
  };


  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <div className="navbar">
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <CameraIcon fontSize="large" />
          </IconButton>
          <BrandTypography variant="h5" component="div" sx={{ flexGrow: 1 }} onClick={handleHome}>
            BingeFlex
          </BrandTypography>
          <Stack direction="row" spacing={2}>
            <StyledButton onClick={handleHome}>Home</StyledButton>
            <StyledButton onClick={handleAbout}>About</StyledButton>
            <StyledButton onClick={handleMovies}>Movies</StyledButton>
            <StyledButton onClick={handleLogin}>Login</StyledButton>
            <StyledButton onClick={handleRegister}>Signup</StyledButton>
            <StyledButton
              onClick={handleLogout} // Trigger the logout function
            >
              Log Out
            </StyledButton>
          </Stack>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};
