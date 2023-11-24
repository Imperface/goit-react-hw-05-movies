import styled from '@emotion/styled';
export const MovieWrapper = styled.div`
  display: flex;
  padding: ${props => props.theme.spacing(20)} 0;
  & img {
    width: 100%;
    height: 100%;
    max-width: 400px;
  }
`;

export const MovieInfoWrapper = styled.div`
  text-align: left;
  max-width: 500px;
  padding-left: ${props => props.theme.spacing(5)};
  margin-left: auto;
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.spacing(5)};
`;
export const MovieInfoGanres = styled.div`
  & div {
    display: flex;
    column-gap: ${props => props.theme.spacing(5)};
  }
`;
export const MovieAdditionInfo = styled.div`
  & ul {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    padding: 0;

    & li {
      flex-grow: 1;

      & a {
        display: block;
        padding-top: ${props => props.theme.spacing(5)};
        padding-bottom: ${props => props.theme.spacing(5)};
        background-color: ${props => props.theme.colors.linkBg};
        border-radius: 20px;
        border: 1px solid transparent;

        &:hover {
          color: ${props => props.theme.colors.accent};
        }

        &.active {
          background-color: ${props => props.theme.colors.linkBgActive};
          color: ${props => props.theme.colors.accent};
          border: 1px solid ${props => props.theme.colors.accent};
        }
      }
    }
  }
`;
