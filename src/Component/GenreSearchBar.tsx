import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface GenreSearchBarProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

const GenreSearchBar: React.FC<GenreSearchBarProps> = ({ selectedGenre, onGenreChange }) => {
  const genres = [
    'All',
    'Action',
    'Comedy',
    'Drama',
    'Horror',
    'Romance',
    'Sci-Fi',
    'Thriller',
    // Add more genres as needed
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop:'20px' }}>
      <FormControl variant="outlined" fullWidth style={{ marginBottom: '20px', width: '300px' }}>
        <InputLabel id="genre-select-label">Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
          label="Genre"
        >
          {genres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
};

export default GenreSearchBar;
