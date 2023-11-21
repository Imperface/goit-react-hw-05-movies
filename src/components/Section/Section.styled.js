import styled from '@emotion/styled';

export const SectionWrapper = styled.section`
  max-width: 800px;
  padding: ${props => props.theme.spacing(6)};
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
`;
