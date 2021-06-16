<<<<<<< HEAD
import React from "react";
import {Plus } from 'react-bootstrap-icons';
export default function ClassroomHomeHeader({ createClass }) {
=======
import React, { useRef, useContext, useEffect } from 'react';
import AuthContext from '../../../../context/auth/AuthContext';

export default function ClassroomHomeHeader({
  toggleModal,
  showCreateClassroom,
}) {
  const authContext = useContext(AuthContext);
  const { clearFilter, user, filtered, filterClasses } = authContext;
  const text = useRef('');
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterClasses(e.target.value);
    } else {
      clearFilter();
    }
  };
>>>>>>> ca2313be82907e9cd3a4ceb2294e022b31bfeae9
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        <span className="h1">Classroom</span>
<<<<<<< HEAD
        <span className="createClass text-danger text-decoration-underline">
          <span onClick={() => createClass()} className="createclassText">
            create new classroom
          </span>
          <span onClick={() => createClass()} className="createclassIcon">
            <i
              
              class="fas fa-plus-circle fa-2x"
            ></i>
=======
        <span
          style={{ display: !showCreateClassroom && 'none' }}
          className="createClass text-danger text-decoration-underline"
        >
          <span onClick={() => toggleModal()} className="createclassText">
            create new classroom
          </span>
          <span onClick={() => toggleModal()} className="createclassIcon">
            <i class="fas fa-plus-circle fa-2x"></i>
>>>>>>> ca2313be82907e9cd3a4ceb2294e022b31bfeae9
          </span>
        </span>
      </div>
      <div className="classroom_search d-flex pl-4 pr-3 py-2">
        <form>
          <input
            ref={text}
            type="text"
            placeholder="Search tutor/course"
            style={{ backgroundColor: 'transparent' }}
            className="w-100 border-0 pr-3"
            onChange={onChange}
          />
        </form>
        <i class="fas view fa-search align-self-center"></i>
      </div>
    </div>
  );
}
