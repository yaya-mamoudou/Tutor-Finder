import React, { useRef, useContext, useEffect } from 'react';
import AuthContext from '../../../../context/auth/AuthContext';

<<<<<<< HEAD
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

=======
export default function ClassroomHomeHeader({
  toggleModal,
  showCreateClassroom,
}) {
>>>>>>> 7023285e429e57df7b260a8a44e8d3f85f38d909
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between">
        <span className="h1">Classroom</span>
        <span
          style={{ display: !showCreateClassroom && "none" }}
          className="createClass text-danger text-decoration-underline"
        >
          <span onClick={() => toggleModal()} className="createclassText">
            create new classroom
          </span>
          <span onClick={() => toggleModal()} className="createclassIcon">
            <i class="fas fa-plus-circle fa-2x"></i>
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
