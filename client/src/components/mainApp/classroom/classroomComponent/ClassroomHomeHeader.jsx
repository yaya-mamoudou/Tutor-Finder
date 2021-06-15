import React, { useRef, useContext, useEffect } from 'react';
import AuthContext from '../../../../context/auth/AuthContext';

export default function ClassroomHomeHeader({ toggleModal }) {
  const authContext = useContext(AuthContext);
  const { filterClasses, clearFilter, filtered, allMyClasses } = authContext;

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

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        <span className="h1">Classroom</span>
        <span className="createClass text-danger text-decoration-underline">
          <span onClick={() => toggleModal()} className="createclassText">
            create new classroom
          </span>
          <span className="createclassIcon">
            <i
              onClick={() => toggleModal()}
              class="fas fa-plus-circle fa-2x"
            ></i>
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
