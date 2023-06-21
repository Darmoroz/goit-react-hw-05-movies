import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/api';
import { CastGrid } from './Cast.styled';

import image from 'assets/images/no_image.jpg';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovies(`movie/${id}/credits`)
      .then(({ data: { cast } }) => {
        setCast(cast);
      })
      .catch(error => console.log(error.message));
  }, [id]);

  if (cast?.length === 0) {
    return (
      <div>
        <p>We don't have any cast for this movie.</p>
      </div>
    );
  }

  return (
    <CastGrid>
      {cast?.length > 0 &&
        cast?.map(({ profile_path, id, name, original_name, character }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path === null || undefined
                    ? image
                    : `https://image.tmdb.org/t/p/w500${profile_path}`
                }
                alt={original_name}
              />
              <h3>{original_name || name}</h3>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </CastGrid>
  );
};
export default Cast;
