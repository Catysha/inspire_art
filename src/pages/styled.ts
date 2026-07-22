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
    text-align: center;
    font-size: 32px;
    margin-bottom: 24px;
`;

export const FeaturedWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;

export const ContentWrapper = styled.div`
    position: relative;
    min-height: 444px;
`;

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 50px;
    justify-items: center;
    margin: 32px 0;
`;

export const LoaderWrapper = styled.div`
    position: absolute;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${colors.white};
    z-index: 1;
`;

export const FeedbackText = styled.p`
    text-align: center;
    color: ${colors.grey};
    font-size: 18px;
    margin: 40px 0;
`;