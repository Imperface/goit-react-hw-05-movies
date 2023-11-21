import { Section } from 'components';
import { useEffect, useState } from 'react';
import { statuses, API_KEY } from 'constants';
import axios from 'axios';
import { FilmList } from 'components/FilmList/FilmList';
export const Home = () => {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState(statuses.IDLE);
  useEffect(() => {
    const fetchMovies = async query => {
      try {
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/trending/movie/day',
          params: { language: 'en-US', api_key: API_KEY },
          headers: {
            accept: 'application/json',
          },
        };
        setStatus(statuses.PENDING);
        const {
          data: { results },
        } = await axios.request(options);
        setFilms(results);
        setStatus(statuses.RESOLVED);
      } catch (error) {
        setStatus(statuses.REJECTED);
      }
    };
    fetchMovies();
  }, []);

  if (status === statuses.PENDING) {
    return (
      <Section>
        <p>Loading tranding films</p>
      </Section>
    );
  }
  if (status === statuses.RESOLVED) {
    return (
      <Section title="The list of trending movies">
        <FilmList films={films} />
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
