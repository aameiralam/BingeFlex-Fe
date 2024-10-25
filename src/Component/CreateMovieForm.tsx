


import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, MenuItem, Box, Card, Collapse } from '@mui/material';
import { Add, ExpandLess, ExpandMore } from '@mui/icons-material'; // Add icons
import axios from 'axios';

interface Movie {
  title: string;
  description: string;
  genre: string;
  rating: number;
  releaseYear: number;
  image: string;
  trailerLink: string;
}

interface CreateMovieFormProps {
  onMovieAdd: () => void;
}

const genres = ['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Thriller']; // Example genres

const CreateMovieForm: React.FC<CreateMovieFormProps> = ({ onMovieAdd }) => {
  const [movie, setMovie] = useState<Movie>({
    title: '',
    description: '',
    genre: '',
    rating: 0,
    releaseYear: new Date().getFullYear(),
    image: '',
    trailerLink: ''
  });

  const [isFormVisible, setFormVisible] = useState(false); // Toggle form visibility

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: name === 'rating' || name === 'releaseYear' ? +value : value // Convert rating and releaseYear to numbers
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Pass the movie to the parent component
    
    axios.post("http://localhost:8080/api/v1/movie/", movie, {
      headers: {
        "Content-Type": "application/json",
        // "Authorization": sessionStorage.getItem("Authorization")
      }
    }).then(res => {
      alert(res.data)
      setFormVisible(false)
      onMovieAdd();
    })
    .catch(err => alert(err.message));

    // Reset the form
    setMovie({
      title: '',
      description: '',
      genre: '',
      rating: 0,
      releaseYear: new Date().getFullYear(),
      image: '',
      trailerLink: ''
    });
  };

  return (
    <Box mt={5} mx="auto" maxWidth="600px" marginLeft={'10px'} >
      <Button
        variant="contained"
        color="primary"
        endIcon={isFormVisible ? <ExpandLess /> : <Add />} // Icon based on form visibility
        onClick={() => setFormVisible(!isFormVisible)} // Toggle form visibility on button click
        sx={{ mb: 2, backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#115293' } }} // Modern color and hover effects
      >
        {isFormVisible ? 'Hide Form' : 'Add New Movie'}
      </Button>

      {/* Use Collapse for smooth animation */}
      <Collapse in={isFormVisible}>
        <Card elevation={3} sx={{ p: 3, borderRadius: '12px', backgroundColor: '#f5f5f5' }}>
          <Typography variant="h4" gutterBottom>
            Admin Panel
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={movie.title}
                  onChange={handleInputChange}
                  required
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  value={movie.description}
                  onChange={handleInputChange}
                  required
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Genre"
                  name="genre"
                  select
                  value={movie.genre}
                  onChange={handleInputChange}
                  required
                  sx={{ mb: 2 }}
                >
                  {genres.map((genre) => (
                    <MenuItem key={genre} value={genre}>
                      {genre}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Rating"
                  name="rating"
                  type="number"
                  value={movie.rating}
                  onChange={handleInputChange}
                  required
                  inputProps={{ min: 0, max: 10, step: 0.1 }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Release Year"
                  name="releaseYear"
                  type="number"
                  value={movie.releaseYear}
                  onChange={handleInputChange}
                  required
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name="image"
                  value={movie.image}
                  onChange={handleInputChange}
                  required
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Trailer URL"
                  name="trailerLink"
                  value={movie.trailerLink}
                  onChange={handleInputChange}
                  required
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{
                    backgroundColor: '#2e7d32',
                    '&:hover': { backgroundColor: '#1b5e20' },
                    borderRadius: '8px'
                  }}
                >
                  Save Movie
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Collapse>
    </Box>
  );
};

export default CreateMovieForm;

