import { Error, Loader, MovieList, Section } from 'components';
import { useEffect, useState } from 'react';
import { statuses, API_KEY } from 'constants';
import axios from 'axios';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(statuses.IDLE);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // create request options
        const options = {
          params: { language: 'en-US', api_key: API_KEY },
          headers: {
            accept: 'application/json',
          },
        };

        // set status pendind, render spiner
        setStatus(statuses.PENDING);
        const endpoint = 'https://api.themoviedb.org/3/trending/movie/day';

        // const { data: {results} } = await axios.get(endpoint, options);

        // get data by request, destruct
        const { data } = await axios.get(endpoint, options);
        const { results } = data;

        // set data to state
        setMovies(results);

        // set status resolved, unmount spiner, mount page
        setStatus(statuses.RESOLVED);
      } catch (error) {
        // mount error block
        setStatus(statuses.REJECTED);
      }
    };
    fetchMovies();
  }, []);

  if (status === statuses.PENDING) {
    return <Loader />;
  }

  if (status === statuses.RESOLVED) {
    return (
      <Section title="The list of trending movies today:">
        <MovieList movies={movies} />
      </Section>
    );
  }

  if (status === statuses.REJECTED) {
    return <Error />;
  }
};
