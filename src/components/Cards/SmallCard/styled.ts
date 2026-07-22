import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const SmallCardWrapper = styled.div`
  border: 1px solid ${colors.lightGrey};
  display: flex;
  align-items: center;
  background: ${colors.white};
  width: 100%;
  max-width: 400px;
  padding: 16px;
  gap: 16px;
  border-radius: 15px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 8px;
`;

export const ImagePlaceholder = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4px;
  font-size: 11px;
  color: ${colors.grey};
  background: ${colors.lightGrey};
  border-radius: 8px;
`;

export const ImgIcon = styled.img`
  width: 120px;
    height: 120px;
`;