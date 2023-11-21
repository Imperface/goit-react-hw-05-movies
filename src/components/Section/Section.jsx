import { Container } from 'components';
import { SectionWrapper, SectionTitle } from './Section.styled';
export const Section = ({ title = null, children }) => (
  <SectionWrapper>
    <Container>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Container>
  </SectionWrapper>
);
