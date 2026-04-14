import styled from 'styled-components';

export const PaginationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end; // Выравнивание вправо как на макете
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
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => (props.$active ? '#FB8C00' : 'transparent')};
  color: ${props => (props.$active ? '#ffffff' : '#444444')};

  &:hover:not(:disabled) {
    background-color: ${props => (props.$active ? '#E57C00' : '#f5f5f5')};
  }

  &:disabled {
    cursor: default;
  }
`;

export const ArrowButton = styled(PageButton)`
  font-size: 18px;
  color: #444444;

  &:disabled {
    color: #cccccc;
    &:hover {
      background-color: transparent;
    }
  }
`;

export const Dots = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  color: #444444;
  font-size: 14px;
  user-select: none;
  cursor: default;
`;

