import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovies } from '../services/api';
import MovieCard from '../components/MovieCard/MovieCard';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
  return (
    <>
      {movie && (
        <>
          <Link to={location.state?.from ?? '/movies'}>&#8592;Go back</Link>
          <MovieCard movie={movie} />
        </>
      )}
    </>
  );
};
export default MoviesDetails;
