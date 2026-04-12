import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const LargeCardWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: fit-content;
`;

export const Img = styled.img`
  max-width: 387px;
  max-height: 444px;
  border-radius: 15px;
`;

export const DescriptionContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -20%);
  bottom: 0;
  z-index: 2;
  padding: 17px 24px;
  max-width: 334px;
  width: 80%;
  border: 1px solid ${colors.lightGrey};
  background: ${colors.white};
  border-radius: 15px;
`;
