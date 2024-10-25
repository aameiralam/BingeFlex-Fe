import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'swiper/css'; 
import 'swiper/css/effect-fade'; 
import 'swiper/css/pagination'; 
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
import image9 from '../assets/9.jpg';
import image10 from '../assets/10.jpg';





function HomePage() {
    const navigate = useNavigate(); // Hook for navigating

    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                width: '100vw',
            }}
        >
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                style={{ height: '100%', width: '100%' }}
            >
                {/* Swiper Slides with Images */}
                <SwiperSlide>
                    <img
                        src={image1}
                        alt="Slide 1"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image2}
                        alt="Slide 2"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image3}
                        alt="Slide 3"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image4}
                        alt="Slide 4"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image5}
                        alt="Slide 5"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image6}
                        alt="Slide 6"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image7}
                        alt="Slide 7"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image8}
                        alt="Slide 8"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image9}
                        alt="Slide 9"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={image10}
                        alt="Slide 10"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
            </Swiper>

            {/* Button to navigate to the movie page */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    textAlign: 'center',
                }}
            >
                <Button
                    variant="contained"
                    color="black"
                    sx={{
                        padding: '10px 20px',
                        marginBottom: '90px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        backgroundColor: '#1976D2',
                        transition: 'background-color 0.3s',
                        '&:hover': {
                            backgroundColor: '#125ea2',
                        },
                    }}
                    onClick={() => navigate('/about')} // Navigate to movie page
                >
                    Explore Movies
                </Button>
            </Box>
        </Box>
    );
}

export default HomePage;
