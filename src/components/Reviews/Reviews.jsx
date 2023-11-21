import axios from 'axios';
import { Section } from 'components';
import { statuses, API_KEY } from 'constants';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NoReviews, ReviewsItem, ReviewsList } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviewsData, setMovieReviewsData] = useState(null);
  const [status, setStatus] = useState(statuses.IDLE);
  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const options = {
          method: 'GET',
          url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          params: { language: 'en-US', api_key: API_KEY, page: 1 },
          headers: {
            accept: 'application/json',
          },
        };
        setStatus(statuses.PENDING);
        const {
          data: { results },
        } = await axios.request(options);
        setMovieReviewsData(results);
        setStatus(statuses.RESOLVED);
      } catch (error) {
        setStatus(statuses.REJECTED);
      }
    };
    fetchMovieReviews();
  }, [setMovieReviewsData, movieId]);

  if (status === statuses.PENDING) {
    return (
      <Section>
        <p>Loading reviews of the selected movie.</p>
      </Section>
    );
  }
  if (status === statuses.RESOLVED) {
    return (
      <Section>
        <ReviewsList>
          {movieReviewsData.length > 0 ? (
            movieReviewsData.map(item => (
              <ReviewsItem key={item.id}>
                <p>
                  <b>{`Author: ${item.author}`}</b>
                </p>
                <p>{item.content}</p>
              </ReviewsItem>
            ))
          ) : (
            <ReviewsItem>
              <NoReviews>Sorry. There are no reviews.</NoReviews>
            </ReviewsItem>
          )}
        </ReviewsList>
      </Section>
    );
  }

  if (status === statuses.REJECTED) {
    return (
      <Section>
        <p>Somethink went wrong.</p>
      </Section>
    );
  }
};
