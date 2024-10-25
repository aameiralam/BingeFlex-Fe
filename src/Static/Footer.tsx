// import { Box, Typography, Link, IconButton, Stack } from '@mui/material';
// import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: '#340c69',
//         color: 'black',
//         py: 4,
//         px: { xs: 1, sm: 3, md: 5 },
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         mt: 15,
//       }}
//     >
//       {/* Logo Section */}
//       <Typography variant="h5"   sx={{
//         fontWeight: 'bold',
//         color: 'hsl(357, 84%, 47%)', // Netflix-style yellow
//         letterSpacing: '0.1em', // For cinematic effect
//         textTransform: 'uppercase',
//         textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds depth to the logo
//         transition: 'transform 0.3s ease', // Smooth animation on hover
//         '&:hover': {
//           transform: 'scale(1.05)', // Slight scaling effect for interactivity
//           textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)', // Enhance shadow on hover
//         },
//       }}>
//         BingeFlex
//       </Typography>

//       {/* Links Section */}
//       <Stack
//         direction={{ xs: 'column', sm: 'row' }}
//         spacing={3}
//         justifyContent="center"
//         sx={{ mb: 3, textAlign: { xs: 'center', sm: 'left' } }}
//       >
//         <Link href="#" underline="none" sx={{ color: 'black', fontSize: '1.5rem' }}>
//           Home
//         </Link>
//         <Link href="#" underline="none" sx={{ color: 'black', fontSize: '1.5rem' }}>
//           Movies
//         </Link>
//         <Link href="#" underline="none" sx={{ color: 'black', fontSize: '1.5rem' }}>
//           Subscription
//         </Link>
//         <Link href="#" underline="none" sx={{ color: 'black', fontSize: '1.5rem' }}>
//           Contact Us
//         </Link>
//         <Link href="#" underline="none" sx={{ color: 'black', fontSize: '1.5rem' }}>
//           About
//         </Link>
//       </Stack>

//       {/* Social Media Icons */}
//       <Stack direction="row" spacing={2} justifyContent="center">
//         <IconButton href="#" target="_blank" sx={{ color: 'hsl(221, 44%, 41%)', fontsize: 'small' }}>
//           <Facebook />
//         </IconButton>
//         <IconButton href="#" target="_blank" sx={{ color: 'hsl(203, 89%, 53%)' }}>
//           <Twitter />
//         </IconButton>
//         <IconButton href="#" target="_blank" sx={{ color: 'hsl(329, 70%, 50%)' }}>
//           <Instagram />
//         </IconButton>
//         <IconButton href="#" target="_blank" sx={{ color: 'hsl(0, 100%, 50%)' }}>
//           <YouTube />
//         </IconButton>
//       </Stack>

//       {/* Copyright Section */}
//       <Typography variant="body2" sx={{ mt: 3 }}>
//         &copy; {new Date().getFullYear()} BingeFlex. Aameir Alam.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;



import { Box, Typography, Link, IconButton, Stack } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import { styled } from '@mui/system'; // Import styled for custom styling

// Styled Typography for the BingeFlex logo in the footer
const FooterLogo = styled(Typography)({
  fontWeight: 'bold',
  color: '#D9C7A3', // Same yellow color for consistency
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)',
  },
});

// Styled Link for the navigation links
const FooterLink = styled(Link)({
  color: 'white',
  fontSize: '1.2rem',
  textDecoration: 'none',
  transition: 'color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    color: '#ffd740', // Matches hover effect with the navbar
    transform: 'scale(1.1)',
  },
});

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to right, #1a237e, #5c6bc0, #8e99f3)', // Gradient background
        color: 'white',
        py: 4,
        px: { xs: 1, sm: 3, md: 5 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 15,
      }}
    >
      {/* Logo Section */}
      <FooterLogo variant="h5" marginBottom={2} >BingeFlex</FooterLogo>

      {/* Links Section */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        justifyContent="center"
        sx={{ mb: 3, textAlign: { xs: 'center', sm: 'left' } }}
      >
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">Movies</FooterLink>
        <FooterLink href="#">Subscription</FooterLink>
        <FooterLink href="#">Contact Us</FooterLink>
        <FooterLink href="#">About</FooterLink>
      </Stack>

      {/* Social Media Icons */}
      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton href="#" target="_blank" sx={{ color: 'hsl(221, 44%, 41%)', fontsize: 'small' }}>
          <Facebook />
        </IconButton>
        <IconButton href="#" target="_blank" sx={{ color: 'hsl(203, 89%, 53%)' }}>
          <Twitter />
        </IconButton>
        <IconButton href="#" target="_blank" sx={{ color: 'hsl(329, 70%, 50%)' }}>
          <Instagram />
        </IconButton>
        <IconButton href="#" target="_blank" sx={{ color: 'hsl(0, 100%, 50%)' }}>
          <YouTube />
        </IconButton>
      </Stack>

      {/* Copyright Section */}
      <Typography variant="body2" sx={{ mt: 3, color: '#ccc' }}>
        &copy; {new Date().getFullYear()} BingeFlex. Aameir Alam.
      </Typography>
    </Box>
  );
};

export default Footer;
