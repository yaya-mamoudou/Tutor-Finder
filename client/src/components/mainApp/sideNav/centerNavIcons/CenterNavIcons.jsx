import React, { useState } from 'react';
import NavIcons from '../navIcons/NavIcons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function CenterNavIcons({ icon, _setFocus }) {
  const [icon, setIcon] = useState(icons);

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
