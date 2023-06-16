import { useEffect, Suspense, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovies } from '../services/api';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovies(`movie/${id}`).then(({ data }) => {
      setMovie(data);
    });
  }, [id]);

  if (!movie) {
    return;
  }
  const {
    title,
    tagline,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <>
      {movie && (
        <>
          <Link>&#8592;Go back</Link>
          <article>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={tagline}
              />
            </div>
            <div>
              <h2>
                {title} &#40; {release_date} &#41;
              </h2>
              <p>User score: {vote_average}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(el => el.name).join(' ')}</p>
            </div>
          </article>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>LOADING...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
export default MoviesDetails;
