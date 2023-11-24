import styled from '@emotion/styled';

export const MovieSearchFormWrapper = styled.div`
  padding: ${props => props.theme.spacing(20)};

  & form {
    display: flex;
    justify-content: center;
    column-gap: ${props => props.theme.spacing(5)};
    color: ${props => props.theme.colors.primary};
  }
  & input {
    flex-grow: 4;
    border: 1px solid ${props => props.theme.colors.accent};
    border-radius: 20px;
    background-color: transparent;
    padding: ${props => props.theme.spacing(5)};
    color: inherit;

    &::placeholder {
      color: ${props => props.theme.colors.primary};
    }
  }
  & button {
    flex-grow: 1;
    color: inherit;
    border: 1px solid ${props => props.theme.colors.accent};
    border-radius: 20px;
    background-color: transparent;
    padding: ${props => props.theme.spacing(5)};
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;
export const NoMovies = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing(10)};
  border-radius: 20px;
  background-color: ${props => props.theme.colors.cardBg};
  text-align: center;
`;
