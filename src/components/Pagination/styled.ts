import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const PaginationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.$active ? `${colors.grey}` : 'transparent')};
  color: ${(props) => (props.$active ? `${colors.white}` : `${colors.darkGrey}`)};

  &:hover {
    background-color: ${(props) => (props.$active ? '#E57C00' : '#f5f5f5')};
  }
`;

export const ArrowButton = styled(PageButton)`
    font-weight: 500;
  font-size: 18px;
  color: ${colors.darkGrey};
`;

export const Dots = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  color: ${colors.darkGrey};
  font-size: 18px;
  user-select: none;
  cursor: default;
    font-weight: 500;
`;
