import { Link } from 'react-router-dom';

export const FilmItem = ({ title, id }) => (
  <>
    <Link to={`movies/${id}`}>{title}</Link>
  </>
);
