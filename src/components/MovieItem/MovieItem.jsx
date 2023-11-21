import { Link } from 'react-router-dom';
import { MovieItemWrapper } from './MovieItem.styled';

export const MovieItem = ({ title, id }) => (
  <>
    <MovieItemWrapper key={id}>
      <Link to={`movies/${id}`}>{title}</Link>
    </MovieItemWrapper>
  </>
);
