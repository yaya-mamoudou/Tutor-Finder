import React from 'react';

export default function NavIcons({ id, icon, className, label, _setFocus }) {
  return (
    <div
      onClick={() => _setFocus(id)}
      key={id}
      style={{ width: '50px', alignSelf: 'center', justifyContent: 'center' }}
      className="d-flex"
    >
      <div className={`${className}`}>
        <i className={`icon ${icon}`}></i>
      </div>
      <div className="label">
        <span
          className={className === 'iconBoxColor' ? 'labelColor' : 'text-white'}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
