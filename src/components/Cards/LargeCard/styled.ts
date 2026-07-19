import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const LargeCardWrapper = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 387px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 444px;
  border-radius: 15px;
  object-fit: cover;
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

export const ImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 444px;
  border-radius: 15px;
  background: ${colors.lightGrey};
  color: ${colors.grey};
  font-size: 14px;
`;
