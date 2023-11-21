import styled from '@emotion/styled';
export const ReviewsList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: ${props => props.theme.spacing(5)};
`;
export const ReviewsItem = styled.li`
  text-align: left;
  width: 100%;
  padding: ${props => props.theme.spacing(5)};
  border-radius: 20px;
  background-color: ${props => props.theme.colors.cardBg};
`;
export const NoReviews = styled.p`
  text-align: center;
`;
