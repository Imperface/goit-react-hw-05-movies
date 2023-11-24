import { Section } from 'components';
import { Link } from 'react-router-dom';

export const Error = () => (
  <Section>
    <p>Somethink went wrong. Try reload the page.</p>
    <Link to="/">Go to the main page</Link>
  </Section>
);
