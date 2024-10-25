import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import  {useNavigate}  from "react-router-dom"
import { Navbar } from '../Static/Navbar';
import Footer from '../Static/Footer';
import background from '../assets/BackgroundVideo.mp4'

const About: React.FC = () => {

    const navigate = useNavigate(); 

    const handleThis = ()=>{
        alert("Redirecting to the home page");
        navigate("/");
      };


  return (
    <>
    <Navbar/>
    <Box
      sx={{
        backgroundImage: {background},
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '2rem 3rem',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#FFD700' }}
          >
            Welcome to BingeFlex
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{ color: '#DDDDDD', fontSize: '1.2rem' }}
          >
            Discover the magic of cinema with a vast collection of movies and TV shows. Our streaming platform
            brings you the latest blockbusters, timeless classics, and hidden gems, all in one place.
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{ color: '#DDDDDD', fontSize: '1.2rem' }}
          >
            Founded today, we are committed to offering you a seamless, immersive viewing experience that
            puts the spotlight on you. With personalized recommendations, curated content, and an easy-to-use interface,
            you can sit back and enjoy the show.
          </Typography>

          <Grid container spacing={4} justifyContent="center" marginTop="3rem">
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: '#FFD700', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: '#DDDDDD' }}>
                We strive to be the premier destination for movie lovers worldwide, offering a cinematic experience
                like no other, with cutting-edge technology and top-tier content.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: '#FFD700', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}
              >
                What We Offer
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ color: '#DDDDDD' }}>
                From thrilling action flicks to heartwarming dramas, we have it all. With thousands of titles across
                genres and regions, there's always something new to discover.
              </Typography>
            </Grid>
          </Grid>

          <Box marginTop="4rem">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#FFD700' }}
            >
              Get Ready for the Ultimate Movie Experience
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph sx={{ color: '#DDDDDD' }}>
              Sign up now to unlock exclusive content, personalized recommendations, and more. Lights, camera, action—your next favorite movie is just a click away.
            </Typography>
            <Button

                onClick={handleThis}
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                marginTop: '2rem',
                backgroundColor: '#FFD700',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#FFC107',
                },
              }}
            >
              Start Watching
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
    <Footer/>
    </>
  );
};

export default About;
