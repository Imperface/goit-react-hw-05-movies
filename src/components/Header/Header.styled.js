import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.backgroundSecondary};
  padding-top: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(5)};

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
