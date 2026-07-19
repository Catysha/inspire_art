import styled from 'styled-components';
import { colors } from '../constants/colors';

export const MainWrapper = styled.main<{
  $backgroundColor?: string;
}>`
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px 15vw;
  background: ${({ $backgroundColor = colors.white }) => $backgroundColor};
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 24px;
`;

export const FeaturedWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 50px;
  justify-items: center;
  margin: 32px 0;
`;

export const FeedbackText = styled.p`
  text-align: center;
  color: ${colors.grey};
  margin: 40px 0;
`;
