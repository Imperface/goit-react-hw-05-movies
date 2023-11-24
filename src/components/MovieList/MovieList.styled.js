const { default: styled } = require('@emotion/styled');

export const MovieListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${props => props.theme.spacing(5)};
  padding: ${props => props.theme.spacing(10)} 0;
`;
