import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/api';
import { CastGrid } from './Cast.styled';

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
                    ? 'https://cdn0.iconfinder.com/data/icons/people-12/24/Anonymous-2-512.png'
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
