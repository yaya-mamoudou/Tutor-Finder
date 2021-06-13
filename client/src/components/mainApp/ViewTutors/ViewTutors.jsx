import React,{useState,useEffect,useContext} from 'react'
import Card from './Card/Card'
import './viewtutors.css'
// import AuthContext from '../../context/auth/AuthContext';
import AuthContext from '../../../context/auth/AuthContext'
import ReviewContext from '../../../context/reviews/ReviewContext';
import { Link } from 'react-router-dom';
function ViewTutors(props) {
    const [data, setData] = useState();
  const [aTutData, setATutData] = useState();

  const authContext = useContext(AuthContext);
  const reviewContext = useContext(ReviewContext);
  const { clearReview } = reviewContext;
  const {
    allTutor,
    ViewAllTutors,
    loadUser,
    viewTutProfiles,
    tutData,
    iStore,
    myCreatedClass,
  } = authContext;
  useEffect(async () => {
    loadUser();
    ViewAllTutors();
    clearReview();
    myCreatedClass();
  }, []);

  useEffect(async () => {
    try {
      await setData(allTutor.user);
    } catch (err) {
      console.error(err);
    }
  }, [allTutor]);
  const clickHandle = (tut) => {
    localStorage.setItem('id', tut._id);
    localStorage.setItem('username', tut.username);
    localStorage.setItem('bio', tut.bio);
    localStorage.setItem('status', tut.status);
    localStorage.setItem('email', tut.email);
    localStorage.setItem('gender', tut.gender);
    localStorage.setItem('speciality', tut.speciality);
    localStorage.setItem('location', tut.location);
  };
 //   <div className="bg-dark w-25 m-3 ">
    //     <h5 className="text-white">{tut.username}</h5>
    //     <h5 className="text-white">{tut.email}</h5>
    //     <h5 className="text-white">{tut.gender}</h5>
    //     <h5 className="text-white">{tut.speciality}</h5>
    //     <Link
    //       onClick={() => clickHandle(tut)}
    //       to={{
    //         pathname: '/tut/profile',
    //       }}
    //     >
    //       <button className="btn btn-primary p-3  m-4">
    //         View Profile
    //       </button>
    //     </Link>
    // </div>
    return (
        <div className='alltutors'>
             <div className="txt-alltutor">All Tutors</div>
             {typeof data === 'object' &&
  data.map((tut) => (
    <Card className="d-flex  " key={tut.email} tut={tut} />
    
  ))}
        </div>
    )
}

export default ViewTutors
