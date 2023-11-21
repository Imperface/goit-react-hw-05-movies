import styled from '@emotion/styled';
export const MovieWrapper = styled.div`
  display: flex;
`;
export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  max-width: 300px;
  flex-shrink: 0;
`;
export const MovieInfoWrapper = styled.div`
  text-align: left;
  padding-left: ${props => props.theme.spacing(5)};
  display: flex;
  flex-direction: column;
`;
export const MovieAdditionInfo = styled.div`
  a {
    padding-top: ${props => props.theme.spacing(5)};
    padding-right: ${props => props.theme.spacing(20)};
    padding-bottom: ${props => props.theme.spacing(5)};
    padding-left: ${props => props.theme.spacing(20)};
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
    &.active {
      color: ${props => props.theme.colors.accent};
    }
  }
`;
