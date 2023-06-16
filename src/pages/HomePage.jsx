import { useState } from 'react';
import { getMovies } from '../services/api';

const HomePage = () => {
  const [trandMovies, setTrandMovies] = useState(() =>
    getMovies('trending/movie/day', { page: 1 }).then(({ data }) =>
      setTrandMovies(data.results)
    )
  );
  console.log(trandMovies);
  return (
    <>
      <h1>Today tranding movies</h1>
      <ul>
        {trandMovies.length &&
          trandMovies.map(({ id }) => {
            return <li key={id}></li>;
          })}
      </ul>
    </>
  );
};
export default HomePage;
