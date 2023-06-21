import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/api';
import { ReviewsStyled } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovies(`movie/${id}/reviews`)
      .then(({ data: { results } }) => {
        setReviews(results);
      })
      .catch(error => console.log(error.message));
  }, [id]);

  if (reviews?.length === 0) {
    return (
      <div>
        <p>We don't have any reviews for this movie.</p>
      </div>
    );
  }

  return (
    <ReviewsStyled>
      {reviews?.length > 0 &&
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content} </p>
            </li>
          );
        })}
    </ReviewsStyled>
  );
};
export default Reviews;
