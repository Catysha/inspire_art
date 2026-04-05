import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const CardDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const InfoWrapper = styled.div`
    text-align: start;
    flex: 1;     
    min-width: 0;   
`;

export const TitleArt = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 17px;
    font-weight: 500;
`;

export const TitleArtist = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    font-weight: 400;
    color: ${colors.grey};
`;