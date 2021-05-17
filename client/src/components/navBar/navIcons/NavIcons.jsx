import React from 'react';

export default function NavIcons({ icon, className, label }) {
  const _iconFocus = () => {};

  return (
    <div className="d-flex">
      <div onClick={() => _iconFocus()} className={className}>
        <i className={`icon ${icon}`}></i>
      </div>
      <div className="label">
        <span className="text-white ">{label}</span>
      </div>
    </div>
  );
}
