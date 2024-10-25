import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

interface DeleteMovieProps {
  id: number;
  setReload:(arg: boolean)=>void;
  handleClose:()=>void;
}

const DeleteMovie: React.FC<DeleteMovieProps> = ({ id, setReload, handleClose }) => {

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/movie/delete/${id}`);
      alert('Movie deleted successfully!');
      setReload(true);
      handleClose();
    } catch (error) {
      console.error('Error deleting movie:', error);
      alert('Failed to delete movie');
    }
};

  return (
    <Button 
      variant="contained" 
      color="error" 
      onClick={handleDelete}
      style={{ marginLeft: '10px', marginTop: '4px' }}
    >
      Delete
    </Button>
  );
};

export default DeleteMovie;
