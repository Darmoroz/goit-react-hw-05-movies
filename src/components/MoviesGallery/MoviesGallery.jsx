import { Link, useLocation } from 'react-router-dom';
import { MoviesGrid } from './MoviesGallery.styled';

const MoviesGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesGrid>
      {movies.map(({ id, title, vote_average }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
            <span>{vote_average.toFixed(1)}</span>
          </li>
        );
      })}
    </MoviesGrid>
  );
};
export default MoviesGallery;
