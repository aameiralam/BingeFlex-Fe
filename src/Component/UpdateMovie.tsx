// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Grid, Typography, MenuItem, Box } from '@mui/material';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const genres = ['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Thriller'];

// const UpdateMovie: React.FC = () => {
//   const { id } = useParams<{ id: string }>(); 
//   const [movie, setMovie] = useState({
//     title: '',
//     description: '',
//     genre: '',
//     rating: 0,
//     releaseYear: new Date().getFullYear(),
//     image: '',
//     trailerLink: ''
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the current movie details to populate the form
//     axios.get(`http://localhost:8080/api/v1/movie/${id}`)
//       .then(response => setMovie(response.data))
//       .catch(error => console.error('Error fetching movie:', error));
//   }, [id]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setMovie({
//       ...movie,
//       [name]: name === 'rating' || name === 'releaseYear' ? +value : value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     axios.put(`http://localhost:8080/api/v1/movie/update/${id}`, movie, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }).then(res => {
//       alert('Movie updated successfully!');
//       navigate('/'); // Navigate back to the movie list after update
//     })
//     .catch(err => alert('Error updating movie:', err.message));
//   };

//   return (
//     <Box mt={5} mx="auto" maxWidth="600px">
//       <form onSubmit={handleSubmit}>
//         <Typography variant="h4" gutterBottom>
//           Update Movie
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Title"
//               name="title"
//               value={movie.title}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Description"
//               name="description"
//               multiline
//               rows={4}
//               value={movie.description}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Genre"
//               name="genre"
//               select
//               value={movie.genre}
//               onChange={handleInputChange}
//               required
//             >
//               {genres.map((genre) => (
//                 <MenuItem key={genre} value={genre}>
//                   {genre}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Rating"
//               name="rating"
//               type="number"
//               value={movie.rating}
//               onChange={handleInputChange}
//               required
//               inputProps={{ min: 0, max: 10, step: 0.1 }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Release Year"
//               name="releaseYear"
//               type="number"
//               value={movie.releaseYear}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Image URL"
//               name="image"
//               value={movie.image}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Trailer URL"
//               name="trailerLink"
//               value={movie.trailerLink}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary">
//               Update Movie
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

// export default UpdateMovie;


import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, MenuItem, Box, Paper } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// List of genres
const genres = ['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Thriller'];

const UpdateMovie: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    genre: '',
    rating: 0,
    releaseYear: new Date().getFullYear(),
    image: '',
    trailerLink: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/movie/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: name === 'rating' || name === 'releaseYear' ? +value : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/v1/movie/update/${id}`, movie, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      alert('Movie updated successfully!');
      navigate('/'); 
    })
    .catch(err => alert('Error updating movie:', err.message));
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?cinema')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: 'black',  // Fallback color
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Paper elevation={10} sx={{ padding: 4, maxWidth: 700, bgcolor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom sx={{ color: '#ffcc00', textAlign: 'center' }}>
            Update Movie
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={movie.title}
                onChange={handleInputChange}
                required
                sx={{
                  input: { color: 'white' },
                  '& .MuiInputLabel-root': { color: '#ffcc00' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#ffcc00' },
                    '&:hover fieldset': { borderColor: '#ff8800' },
                    '&.Mui-focused fieldset': { borderColor: '#ffaa00' }
                  }
                }}
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
                sx={{
                  input: { color: 'white' },
                  textarea: { color: 'white' },  // Color for multiline (textarea)
                  '& .MuiInputLabel-root': { color: '#ffcc00' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#ffcc00' },
                    '&:hover fieldset': { borderColor: '#ff8800' },
                    '&.Mui-focused fieldset': { borderColor: '#ffaa00' }
                  }
                }}
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
                sx={{
                  '& .MuiInputBase-input': { color: 'white' },  // Color for selected text
                  '& .MuiInputLabel-root': { color: '#ffcc00' },  // Color for label
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#ffcc00' },
                    '&:hover fieldset': { borderColor: '#ff8800' },
                    '&.Mui-focused fieldset': { borderColor: '#ffaa00' }
                  }
                }}
              >
                {genres.map((genre) => (
                  <MenuItem
                    key={genre}
                    value={genre}
                    sx={{
                      color: 'black',  // Dropdown text color
                      backgroundColor: 'white',  // Dropdown background
                      '&:hover': { backgroundColor: '#ffcc00', color: 'black' }  // Hover effect
                    }}
                  >
                    {genre}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Rating"
                name="rating"
                type="number"
                value={movie.rating}
                onChange={handleInputChange}
                required
                inputProps={{ min: 0, max: 10, step: 0.1 }}
                sx={{
                  input: { color: 'white' },
                  '& .MuiInputLabel-root': { color: '#ffcc00' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#ffcc00' },
                    '&:hover fieldset': { borderColor: '#ff8800' },
                    '&.Mui-focused fieldset': { borderColor: '#ffaa00' }
                  }
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Release Year"
                name="releaseYear"
                type="number"
                value={movie.releaseYear}
                onChange={handleInputChange}
                required
                sx={{
                  input: { color: 'white' },
                  '& .MuiInputLabel-root': { color: '#ffcc00' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#ffcc00' },
                    '&:hover fieldset': { borderColor: '#ff8800' },
                    '&.Mui-focused fieldset': { borderColor: '#ffaa00' }
                  }
                }}
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
                sx={{
                  input: { color: 'white' },
                  '& .MuiInputLabel-root': { color: '#ffcc00' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#ffcc00' },
                    '&:hover fieldset': { borderColor: '#ff8800' },
                    '&.Mui-focused fieldset': { borderColor: '#ffaa00' }
                  }
                }}
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
                sx={{
                  input: { color: 'white' },
                  '& .MuiInputLabel-root': { color: '#ffcc00' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#ffcc00' },
                    '&:hover fieldset': { borderColor: '#ff8800' },
                    '&.Mui-focused fieldset': { borderColor: '#ffaa00' }
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ bgcolor: '#ffcc00', color: 'black', '&:hover': { bgcolor: '#ffaa00' } }}>
                Update Movie
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default UpdateMovie;


