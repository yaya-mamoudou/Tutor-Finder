import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { Modal, Button } from 'react-bootstrap';
import './editProfile.css';

function EditProfile({ modalStatus, editInfo, handleModal, user }) {
  const authContext = useContext(AuthContext);
  const { editProfile } = authContext;
  const [editedData, seteditedData] = useState(undefined);
  const [toggle, settoggle] = useState();

  useEffect(async () => {
    if (typeof user === 'object') {
      await seteditedData(user);
    } else {
    }
  }, [user]);

  useEffect(async () => {
    if (typeof user === 'object') {
      await settoggle(1);
    } else {
    }
  }, [editedData]);

  const handleChange = (e, field) => {
    let temp = { ...editedData };
    temp[field] = e.target.value;
    seteditedData(temp);
  };

  const submitForm = (e) => {
    // e.preventDefault();
    editProfile(editedData);
  };

  return (
    toggle === 1 && (
      <div className="mymodal" style={{ display: `${modalStatus}` }}>
        <div className="modalCard">
          <div className="modalHeader d-flex">
            Modify profile info
            <div
              onClick={() => handleModal()}
              className="bg-dark px-3 ml-auto "
            >
              <i class="fas fa-times text-white align-self-center"></i>
            </div>
          </div>
          <form onSubmit={(e) => submitForm(e)} className=" p-5">
            <div className="inputItem p-2 mt-3">
              <span>Name:</span>{' '}
              <input
                onChange={(e) => handleChange(e, 'username')}
                value={editedData.username}
                className="p-2"
                name="name"
                type="text"
                placeholder="name"
              />
            </div>
            <div className="inputItem p-2 mt-3">
              <span>Email:</span>{' '}
              <input
                onChange={(e) => handleChange(e, 'email')}
                value={editedData.email}
                className="p-2"
                name="email"
                type="text"
                placeholder="email"
              />
            </div>
            <div className="inputItem p-2 mt-3">
              <span>Location:</span>{' '}
              <input
                onChange={(e) => handleChange(e, 'location')}
                value={editedData.location}
                className="p-2"
                name="location"
                type="text"
                placeholder="location"
              />
            </div>
            <div className="inputItem p-2 mt-3">
              <span>phone:</span>{' '}
              <input
                onChange={(e) => handleChange(e, 'tel')}
                value={editedData.tel}
                className="p-2"
                name="telephone"
                type="number"
                placeholder="phone"
              />
            </div>
            <div className="inputItem p-2 mt-3 d-flex ">
              <span className="align-self-center">Bio:</span>{' '}
              <textarea
                onChange={(e) => handleChange(e, 'bio')}
                value={editedData.bio}
                className="p-2"
                name="bio"
                type="number"
                placeholder="bio"
              />
            </div>

            <button
              type="submit"
              className="save_btn btn-warning btn mt-3 align-self-end btn-xl p-3"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default EditProfile;
