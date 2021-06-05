import React, { createRef, useContext } from 'react';
import CenterNavIcons from './centerNavIcons/CenterNavIcons';
import Menu from './menu/Menu';
import Logout from './logout/Logout';
import AuthContext from '../../../context/auth/AuthContext';
const menu = createRef();

export default function SideNav() {
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
