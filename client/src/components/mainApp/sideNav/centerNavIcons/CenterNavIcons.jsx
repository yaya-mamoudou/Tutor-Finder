import React, { useState } from 'react';
import NavIcons from '../navIcons/NavIcons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
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

export default function CenterNavIcons() {
  const [icon, setIcon] = useState(icons);

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

  const _iconList = icon.map((icon) => {
    return (
      <Link to={icon.link}>
        <NavIcons
          id={icon.key}
          _setFocus={_setFocus}
          className={icon.className}
          icon={icon.icon}
          label={icon.label}
        />
      </Link>
    );
  });

  return (
    <div className="iconsInCenter d-flex flex-column pt-3">{_iconList}</div>
  );
}
