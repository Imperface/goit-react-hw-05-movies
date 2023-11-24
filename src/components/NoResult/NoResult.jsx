import { Section } from 'components';
import { NoResultWrapper } from './NoResult.styled';

export const NoResult = ({ text }) => (
  <Section>
    <NoResultWrapper>
      <p>{text}</p>
    </NoResultWrapper>
  </Section>
);
