import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.backgroundSecondary};
  padding: ${props => props.theme.spacing(10)} 0;

  & a {
    color: ${props => props.theme.colors.accent};
  }

  & svg {
    width: 100px;
  }
`;
