import styled from '@emotion/styled';
export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  row-gap: ${props => props.theme.spacing(6)};
  column-gap: ${props => props.theme.spacing(5)};
`;
export const CastItem = styled.li`
  width: 30%;
  height: 500px;
  padding: ${props => props.theme.spacing(5)};
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const CastProfileImg = styled.img`
  width: 100%;
  border-radius: 20px;

  max-width: 250px;
`;
