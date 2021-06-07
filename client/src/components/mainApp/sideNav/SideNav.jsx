import React, { createRef, useContext } from 'react';
import CenterNavIcons from './centerNavIcons/CenterNavIcons';
import Menu from './menu/Menu';
import Logout from './logout/Logout';
import AuthContext from '../../../context/auth/AuthContext';
const menu = createRef();

let activePath = window.location.pathname;
const icons = [
  {
    icon: 'fas fa-home',
    label: 'Home',
    link: '/home',
    key: 0,
    className: activePath === '/home' ? 'iconBoxColor' : 'iconBox',
  },
  {
    icon: 'far fa-comment-dots',
    label: 'Chat message',
    className: activePath === '/chat' ? 'iconBoxColor' : 'iconBox',
    link: '/chat',
    key: 1,
  },
  {
    icon: 'fas fa-book',
    label: 'Classroom',
    className: activePath === '/classroom' ? 'iconBoxColor' : 'iconBox',
    link: '/classroom',
    key: 2,
  },
  {
    icon: 'fas fa-user',
    label: 'Profile',
    className: activePath === '/profile' ? 'iconBoxColor' : 'iconBox',
    link: '/profile',
    key: 3,
  },
];

export default function SideNav() {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  const _toggleMenu = () => {
    const reduced = menu.current.className.includes('reduced');
    if (reduced) {
      menu.current.className = menu.current.className.replace(
        'reduced',
        'expanded'
      );
    } else {
      menu.current.className = menu.current.className.replace(
        'expanded',
        'reduced'
      );
    }
  };
  const _logout = () => {
    logout();
  };

  return (
    <div ref={menu} className="sideNav reduced ">
      <div className="navContainer justify-content-between">
        <Menu _toggleMenu={_toggleMenu} />
        <CenterNavIcons />
        <Logout _logout={_logout} />
      </div>
    </div>
  );
}
