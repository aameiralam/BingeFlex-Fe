import React from 'react';
import { Box, TextField } from '@mui/material';

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onQueryChange }) => {
  return (
    <Box display="flex" justifyContent="center" marginBottom="40px">
    <TextField
      variant="outlined"
      placeholder="Search for movies by title"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      style={{ marginBottom: '0.5px', width: '500px' }} // Removed marginTop
    />
  </Box>
  )
};

export default SearchBar;
