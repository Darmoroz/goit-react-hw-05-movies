import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { AddInfoStyled, CardStyled } from './MovieCard.styled';

const MovieCard = ({
  movie: {
    title,
    tagline,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres,
    backdrop_path,
  },
}) => {
  const location = useLocation();
  console.log(location);
  return (
    <CardStyled
      style={{
        backgroundImage: ``,
      }}
    >
      <article
        style={{
          backgroundImage: `linear-gradient(to right, rgba(199.5, 199.5, 178.5, 1) calc((50vw - 170px) - 340px), rgba(199.5, 199.5, 178.5, 0.84) 50%, rgba(199.5, 199.5, 178.5, 0.84) 100%), url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}')`,
        }}
      >
        <div style={{ minWidth: '250px', maxWidth: '250px' }}>
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
          <p>{genres?.map(el => el.name).join(' ')}</p>
        </div>
      </article>
      <AddInfoStyled>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </AddInfoStyled>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </CardStyled>
  );
};
export default MovieCard;
