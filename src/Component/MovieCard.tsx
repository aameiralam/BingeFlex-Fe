
import React, { useState } from 'react';
import { 
  Card, CardContent, Typography, CardMedia, Grid, Button, Box, Modal, IconButton 
} from '@mui/material';
import { color, styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import DeleteMovie from './DeleteMovie';
import TrailerModal from './TrailerModal';
import CloseIcon from '@mui/icons-material/Close';

interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  rating: number;
  releaseYear: number;
  image: string;
  trailerLink: string;
}

interface MovieCardProps {
  movie: Movie;
  setReload: (arg: boolean)=>void;
}

const StyledCard = styled(Card)({
  transition: 'transform 0.2s',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    
  },
});

const MovieCard: React.FC<MovieCardProps> = ({ movie, setReload }) => {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false); // State for trailer modal
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleEditClick = () => {
    navigate(`/update/${movie.id}`);
  };

  const handleWatchTrailerClick = () => {
    setTrailerOpen(true); // Open the trailer modal
  };

  const videoId = movie.trailerLink.split('v=')[1]; // Extract the video ID from the URL

  const handleOpen = () => setModalOpen(true);  // Open the main modal
  const handleClose = () => setModalOpen(false); // Close the modal

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} style={{ marginTop: '20px', cursor:'pointer' }}>
        <StyledCard onClick={handleOpen}> {/* Open modal on card click */}
          <CardMedia
            component="img"
            height="400"
            src={movie.image}
            alt={movie.title}
          />
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {movie.genre} - {movie.releaseYear}
            </Typography>

            <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
              {expanded ? movie.description : `${movie.description.slice(0, 100)}...`}
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>

      {/* Modal to show expanded movie card */}
      <Modal open={modalOpen} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            maxHeight: '100vh',
            bgcolor: 'hsl(0, 0%, 95%) ',
            boxShadow: 24,
            borderRadius: 2,
            overflowY: 'auto',
            p: 4,
          }}
        >
          {/* Close button for the modal */}
          <IconButton
            sx={{ position: 'absolute', top: 16, right: 16 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          <CardMedia
            component="img"
            height="450"
            src={movie.image}
            alt={movie.title}
            sx={{ marginBottom: 4 }}
          />
          <Typography variant="h4" component="h2" gutterBottom>
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {movie.genre} - {movie.releaseYear}
          </Typography>

          <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
            {movie.description}
          </Typography>

          <Typography variant="subtitle2" color="primary" mt={2}>
            Rating: {movie.rating}/10
          </Typography>

          <Box mt={2}>
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
              Watch Now
            </Button>
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={handleWatchTrailerClick} // Open trailer modal
              style={{ marginLeft: '10px' }}
            >
              Watch Trailer
            </Button>
            <Button 
              variant="contained" 
              color="success" 
              onClick={handleEditClick} 
              style={{ marginLeft: '10px', marginTop: '4px' }}
            >
              Edit
            </Button>

            <DeleteMovie id={movie.id} setReload={setReload} handleClose={handleClose}  />
          </Box>
        </Box>
      </Modal>

      {/* Trailer Modal for watching trailer */}
      <TrailerModal 
        open={trailerOpen} 
        onClose={() => setTrailerOpen(false)} 
        videoId={videoId} 
      />
    </>
  );
};

export default MovieCard;
