import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const LargeCardWrapper = styled.div`
    max-width: 387px;
    position: relative;
`;

export const Img = styled.img`
    width: 100%;
    display: block;
    border-radius: 12px;
    
`;

export const DescriptionContainer = styled.div`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 334px;
    background: white;
    border-radius: 12px;
    padding: 12px;
    border: 1px solid ${colors.lightGrey};
`;