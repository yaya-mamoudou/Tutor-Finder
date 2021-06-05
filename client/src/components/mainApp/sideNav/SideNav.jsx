import React, { createRef, useContext, useState } from 'react';
import CenterNavIcons from './centerNavIcons/CenterNavIcons';
import Menu from './menu/Menu';
import Logout from './logout/Logout';
import AuthContext from '../../../context/auth/AuthContext';
import { useEffect } from 'react';
const menu = createRef();

let activePath = window.location.pathname;
console.log(activePath);
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
  const [icon, setIcon] = useState(icons);

  const authContext = useContext(AuthContext);
  const { logout } = authContext;
  const _toggleMenu = () => {
    console.log(menu.current);
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

  const _setFocus = async (id) => {
    let temp = await [...icon];
    await temp.map((icon) => {
      return icon.key === id
        ? (icon.className = 'iconBoxColor')
        : (icon.className = 'iconBox');
    });
    setIcon(temp);
    console.log(activePath);
  };

  const _logout = async () => {
    await logout();
  };

  return (
    <div ref={menu} className="sideNav reduced ">
      <div className="navContainer justify-content-between">
        <Menu _toggleMenu={_toggleMenu} />
        <CenterNavIcons _setFocus={_setFocus} icon={icon} />
        <Logout _logout={_logout} />
      </div>
    </div>
  );
}
