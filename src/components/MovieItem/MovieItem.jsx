import { Link, useLocation } from 'react-router-dom';
import { MovieItemWrapper } from './MovieItem.styled';

export const MovieItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <>
      <MovieItemWrapper key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title}
        </Link>
      </MovieItemWrapper>
    </>
  );
};
