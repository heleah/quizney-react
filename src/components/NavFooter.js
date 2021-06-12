import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Home from '../assets/home_outlined.svg';
import HomeActive from '../assets/home_filled.svg';
import Bookmarks from '../assets/crown_outlined.svg';
import BookmarksActive from '../assets/crown_filled.svg';
import Add from '../assets/add_outlined.svg';
import AddActive from '../assets/add_filled.svg';
import Profile from '../assets/profile_outlined.svg';
import ProfileActive from '../assets/profile_filled.svg';

export default function NavFooter() {
  return (
    <Footer>
      <NavLinkStyled exact to='/'>
        <NavHome role='img' aria-label='Home' />
      </NavLinkStyled>
      <NavLinkStyled to='/bookmarks'>
        <NavBookmarks role='img' aria-label='Bookmarks' />
      </NavLinkStyled>
      <NavLinkStyled to='/add-question'>
        <NavAdd role='img' aria-label='Add Question' />
      </NavLinkStyled>
      <NavLinkStyled to='/profile'>
        <NavProfile role='img' aria-label='Profile' />
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
  padding: 0.6rem;
`;

const NavLinkStyled = styled(NavLink)`
  border-right: 1px solid black;
  padding: 0.6rem;
  text-align: center;

  &:last-child {
    border-right: none;
  }
`;

const NavItem = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  height: 2.5rem;
`;

const NavHome = styled(NavItem)`
  background: center / contain no-repeat url(${Home});

  .active & {
    background-image: url(${HomeActive});
  }
`;

const NavBookmarks = styled(NavItem)`
  background: center / contain no-repeat url(${Bookmarks});

  .active & {
    background-image: url(${BookmarksActive});
  }
`;

const NavAdd = styled(NavItem)`
  background: center / contain no-repeat url(${Add});

  .active & {
    background-image: url(${AddActive});
  }
`;

const NavProfile = styled(NavItem)`
  background: center / contain no-repeat url(${Profile});

  .active & {
    background-image: url(${ProfileActive});
  }
`;
