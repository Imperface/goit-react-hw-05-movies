import axios from 'axios';
import { MovieSearchFormWrapper } from './Movie.styled';
import { Error, Loader, MovieList, NoResult, Section } from 'components';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';

import { API_KEY } from 'constants';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovie = async () => {
      try {
        // create request options
        const options = {
          params: {
            language: 'en-US',
            page: '1',
            api_key: API_KEY,
            query: query,
          },
          headers: {
            accept: 'application/json',
          },
        };
        // mount spiner
        setIsLoading(true);
        const endpoint = 'https://api.themoviedb.org/3/search/movie';

        // const { data: { results } } = await axios.get(endpoint, options);

        // destr fetched data
        const { data } = await axios.get(endpoint, options);
        const { results } = data;

        // unmount spiner, set data to state
        setMovieData(results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchMovie();
  }, [query]);

  const onSearchFormSubmit = e => {
    e.preventDefault();
    const inputRef = e.target.elements.movieSearch;
    const inputValue = inputRef.value.trim().toLowerCase();
    if (!inputValue) {
      Notify.failure('Empty search query.');
      return;
    }
    setSearchParams({ query: inputValue });
  };
  return (
    <>
      <Section>
        <MovieSearchFormWrapper>
          <form onSubmit={onSearchFormSubmit}>
            <input name="movieSearch" placeholder="Search movie" />
            <button type="submit">Search</button>
          </form>
        </MovieSearchFormWrapper>
      </Section>

      {isLoading && <Loader />}
      {error && <Error />}

      <Section>
        {/* if movieData = true && if error = false =>  render movieList or noResult */}
        {movieData &&
          !error &&
          (movieData.length > 0 ? (
            <MovieList movies={movieData} />
          ) : (
            <NoResult text="No movies were found for your request" />
          ))}
      </Section>
    </>
  );
};
