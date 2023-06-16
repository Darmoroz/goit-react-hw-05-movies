import { Link, useLocation } from 'react-router-dom';
import { TrendMoviesGrid } from './TrendMovies.styled';

const TrendMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <TrendMoviesGrid>
      {movies.map(({ id, title, vote_average }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
            <span>{vote_average.toFixed(1)}</span>
          </li>
        );
      })}
    </TrendMoviesGrid>
  );
};
export default TrendMovies;
