import { useState } from 'react';
import museumLogo from './../../assets/icons/museum.svg';
import burgerMenu from './../../assets/icons/burger_menu.svg';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, Inner, Logo, Img, DesktopNav, Burger, MobileMenu } from './styled';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderWrapper>
      <Inner>
        <Logo>
          <Img src={museumLogo} alt="Museum" />
          InspireArt
        </Logo>

        <DesktopNav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </DesktopNav>
        <Burger src={burgerMenu} alt="Menu" onClick={toggleMenu} />
      </Inner>

      {isOpen && (
        <MobileMenu>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/favorites" onClick={closeMenu}>
            Favorites
          </NavLink>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};
