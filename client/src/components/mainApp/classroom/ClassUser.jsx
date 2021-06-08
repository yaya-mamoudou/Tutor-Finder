import React from 'react';
import images from '../../assets/classroom/images.jpg';
function ClassUser({ user }) {
  return (
    <div className="pack p-3">
      <div className="informing">
        <div className="avatar">
          <img src={images} className="pix" alt="" />
        </div>
        <div className="username">{user.username}</div>
      </div>
    </div>
  );
}

export default ClassUser;
