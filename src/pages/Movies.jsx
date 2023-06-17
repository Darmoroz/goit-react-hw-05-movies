import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import { useEffect, useState, useRef } from 'react';

import image from 'assets/images/error-404.webp';
import { getMovies } from '../services/api';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryMovies, setQueryMovies] = useState([]);

  const query = searchParams.get('query') ?? '';
  let total = useRef();

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovies('search/movie', { query })
      .then(({ data }) => {
        setQueryMovies(data.results);
        total.current = data.total_results;
      })
      .catch(error => console.log(error.message));
  }, [query]);

  const updateQuery = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <SearchBar onSubmit={updateQuery} />
      {queryMovies?.length > 0 && <MoviesGallery movies={queryMovies} />}
      {total.current === 0 && (
        <img
          src={image}
          alt="not found"
          style={{
            marginTop: '20px',
          }}
        />
      )}
    </>
  );
};
export default Movies;
