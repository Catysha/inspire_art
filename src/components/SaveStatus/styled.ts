import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 59px;
  height: 59px;
  background: ${colors.lightGrey};
  border-radius: 30px;
  flex-shrink: 0;
`;

export const ImageButton = styled.img`
  width: 24px;
`;
