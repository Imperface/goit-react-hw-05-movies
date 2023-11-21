import { MovieItem } from 'components';
import { MovieListWrapper } from './MovieList.styled';
export const MovieList = ({ movies }) => {
  return (
    <MovieListWrapper>
      {movies.map(({ title, id }) => (
        <MovieItem key={id} title={title} id={id} />
      ))}
    </MovieListWrapper>
  );
};
