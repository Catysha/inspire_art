import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${colors.lightGrey};
  position: relative;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  font-weight: bold;
  font-size: 20px;
`;

export const Img = styled.img`
  height: 45px;
  width: auto;

  @media (max-width: 760px) {
    height: 45px;
  }
`;

export const DesktopNav = styled.nav`
  display: flex;
  gap: 24px;
  font-size: 18px;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .active {
    font-weight: 600;
  }
`;

export const Burger = styled.img`
  display: none;
  cursor: pointer;
  height: 24px;
  width: 24px;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 16px;
  width: 200px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
