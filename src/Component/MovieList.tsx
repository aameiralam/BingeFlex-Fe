
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';
import CreateMovieForm from './CreateMovieForm';
import SearchBar from './SearchBar'; // Import the SearchBar component
import GenreSearchBar from './GenreSearchBar'; // Import the GenreSearchBar component
import axios from 'axios';
import Footer from '../Static/Footer';
import { Navbar } from '../Static/Navbar';
import { useNavigate } from 'react-router-dom';

interface Movie {
  id: number;  
  name: string;
  title: string;
  genre: string;
  image: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
  const [selectedGenre, setSelectedGenre] = useState<string>('All'); // State for selected genre
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  const addMovie = () => {
    setReload(true);
  };

  const deleteMovie = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/movie/delete/${id}`);
      setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
      navigate('/');
    }
  };
  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/movie/");
      setMovies(res.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
    setReload(false);
  }, [reload])

  // Filter movies based on search query and selected genre
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div style={{ backgroundColor: 'hsl(215 100% 95%)', minHeight: '100vh' }}>
      
      <Navbar />
      <CreateMovieForm onMovieAdd={addMovie} />
      <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      <GenreSearchBar selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
      <Grid container spacing={3}>
        {filteredMovies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onDelete={deleteMovie}  // Pass delete handler
            setReload={setReload} 
          />
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default MovieList;


























