import { Section } from 'components';
import { Link } from 'react-router-dom';
import { NotFoundWrapper } from './NotFound.styled';

export const NotFound = () => (
  <NotFoundWrapper>
    <Section>
      <p>Something went wrong, Route not found.</p>
      <Link to="/">Go to the main page</Link>
    </Section>
  </NotFoundWrapper>
);
