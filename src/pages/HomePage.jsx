import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { getMovies } from '../services/api';
import TrendMovies from '../components/MoviesGallery/MoviesGallery';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState(() =>
    getMovies('trending/movie/day', { page: 1 })
      .then(({ data }) => setTrendMovies(data.results))
      .catch(error => console.log(error.message))
  );

  return (
    <>
      <h2
        style={{
          marginBottom: '16px',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Today trend movies
      </h2>
      {trendMovies.length && <TrendMovies movies={trendMovies} />}
    </>
  );
};
export default HomePage;
