import styled from '@emotion/styled';

export const NotFoundWrapper = styled.div`
  padding: ${props => props.theme.spacing(20)};
  & a {
    color: ${props => props.theme.colors.accent};
  }
`;
