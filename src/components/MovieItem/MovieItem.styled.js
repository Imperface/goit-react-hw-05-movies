import styled from '@emotion/styled';

export const MovieItemWrapper = styled.li`
  width: 100%;
  text-align: left;
  & a {
    display: block;
    padding: ${props => props.theme.spacing(5)};
    border: 1px solid #fff;
    border-radius: 20px;
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;
