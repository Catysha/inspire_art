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
