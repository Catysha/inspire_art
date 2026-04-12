import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const SmallCardWrapper = styled.div`
  border: 1px solid ${colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  width: 400px;
  height: 120px;
  gap: 16px;
  border-radius: 15px;
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
`;
