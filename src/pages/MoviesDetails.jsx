import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getMovies } from '../services/api';
import MovieCard from '../components/MovieCard/MovieCard';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies(`movie/${id}`)
      .then(({ data }) => {
        setMovie(data);
      })
      .catch(error => {
        console.log(error.message);
        navigate('/');
      });
  }, [id, navigate]);

  if (!movie) {
    return;
  }
  console.log(movie);
  return (
    <>
      {movie && (
        <>
          <Link>&#8592;Go back</Link>
          <MovieCard movie={movie} />
        </>
      )}
    </>
  );
};
export default MoviesDetails;
