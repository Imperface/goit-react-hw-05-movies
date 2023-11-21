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
  }
  & p,
  h1,
  h2,
  h3 {
    margin: 0;
    padding-top: ${props => props.theme.spacing(2)};
    padding-bottom: ${props => props.theme.spacing(2)};
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
  & ul {
    padding: 0;
    margin: 0;
  }
  & header {
    display: flex;
    column-gap: 10px;
    margin: 0 auto;
    max-width: 800px;
  }
  & header a {
    padding-top: ${props => props.theme.spacing(5)};
    padding-right: ${props => props.theme.spacing(20)};
    padding-bottom: ${props => props.theme.spacing(5)};
    padding-left: ${props => props.theme.spacing(20)};
    background-color: #3c4042;
    border-radius: 20px;
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
  & header .active {
    background-color: #1f4d64;

    color: ${props => props.theme.colors.accent};
    border: 1px solid ${props => props.theme.colors.accent};
  }
  & footer {
    width: 800px;
    margin: 0 auto;
    padding: 200px 0 0;
    & a {
      color: ${props => props.theme.colors.accent};
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 20px;
    }
    & svg {
      width: 100px;
    }
  }
`;
