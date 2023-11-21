import styled from '@emotion/styled';
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-size: ${props => props.theme.spacing(5)};
  text-align: center;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};

  & main {
    flex-grow: 1;
  }

  & ul {
    list-style: none;
    margin: 0;
  }

  & p,
  h1,
  h2,
  h3 {
    margin: 0;
    padding: ${props => props.theme.spacing(2)} 0;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`;
