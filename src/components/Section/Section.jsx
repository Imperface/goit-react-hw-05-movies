import { SectionWrapper, SectionTitle } from './Section.styled';
export const Section = ({ title = null, children }) => (
  <SectionWrapper>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </SectionWrapper>
);
