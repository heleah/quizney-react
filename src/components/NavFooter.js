import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import home from '../assets/home_outlined.svg';
import bookmarks from '../assets/crown_outlined.svg';
import add from '../assets/add_outlined.svg';
import profile from '../assets/profile_outlined.svg';

export default function NavFooter() {
  return (
    <Footer>
      <NavLinkStyled exact to='/'>
        <img src={home} alt='Home Icon' />
      </NavLinkStyled>
      <NavLinkStyled to='/bookmarks'>
        <img src={bookmarks} alt='Bookmark Icon' />
      </NavLinkStyled>
      <NavLinkStyled to='/submit-question'>
        <img src={add} alt='Add Icon' />
      </NavLinkStyled>
      <NavLinkStyled to='/profile'>
        <img src={profile} alt='Profile Icon' />
      </NavLinkStyled>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: var(--light);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));
  align-items: center;
  padding: 0;
`;

const NavLinkStyled = styled(NavLink)`
  border-right: 1px solid black;
  padding: 1rem;
  padding-bottom: 0;
  text-align: center;

  &:last-child {
    border-right: none;
  }

  img {
    height: 2.5rem;
  }
`;
