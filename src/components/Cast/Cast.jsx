import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { statuses, API_KEY } from 'constants';
import axios from 'axios';
import { Section } from 'components';
import { CastItem, CastList, CastProfileImg } from './Cast.styled';
export const Cast = () => {
  const { movieId } = useParams();
  const [movieCastData, setMovieCastData] = useState(null);
  const [status, setStatus] = useState(statuses.IDLE);
  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const options = {
          method: 'GET',
          url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          params: { language: 'en-US', api_key: API_KEY },
          headers: {
            accept: 'application/json',
          },
        };
        setStatus(statuses.PENDING);
        const {
          data: { cast },
        } = await axios.request(options);
        console.log(cast);
        // set data of selected movie
        setMovieCastData(cast);
        setStatus(statuses.RESOLVED);
      } catch (error) {
        setStatus(statuses.REJECTED);
      }
    };
    fetchMovieCast();
  }, [setMovieCastData, movieId]);

  if (status === statuses.PENDING) {
    return (
      <Section>
        <p>Loading cast of the selected movie.</p>
      </Section>
    );
  }
  if (status === statuses.RESOLVED) {
    return (
      <Section>
        <CastList>
          {movieCastData.map(item => (
            <CastItem key={item.cast_id}>
              {item.profile_path && (
                <CastProfileImg
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt=""
                />
              )}
              <div>
                <p>{`Name: ${item.name}`}</p>
                <p>{`Character: ${item.character}`}</p>
              </div>
            </CastItem>
          ))}
        </CastList>
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
