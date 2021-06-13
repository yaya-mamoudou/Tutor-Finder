import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { Modal, Button } from "react-bootstrap";
import editProfile from "./editProfile.css";

function EditProfile({ modalStatus, editInfo, handleModal, user }) {
  const authContext = useContext(AuthContext);
  const { editProfile } = authContext;

  const [editedData, seteditedData] = useState(undefined);
  const [toggle, settoggle] = useState();
  const [file, setFile] = useState("");
  // const [fileName, setFileName] = useState('choose file');
  // const [uploadFile, setUploadedFile] = useState({});

  useEffect(async () => {
    if (typeof user === "object") {
      await seteditedData(user);
    } else {
    }
  }, [user]);

  useEffect(async () => {
    if (typeof user === "object") {
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
              className="bg-dark closeModalIcon px-3 ml-auto "
            >
              <i class="fas fa-times text-white align-self-center"></i>
            </div>
          </div>
          <form onSubmit={(e) => submitForm(e)} className=" p-5">
            <div class="form-group">
              <label htmlFor="Profille Picture"> </label>

              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                // onChange={onChange}
              />
            </div>

            <div className="inputItem p-2 mt-3">
              <span>Name:</span>
              <input
                onChange={(e) => handleChange(e, "username")}
                value={editedData.username}
                className="p-2"
                name="name"
                type="text"
                placeholder="name"
              />
            </div>
            <div className="inputItem p-2 mt-3">
              <span>Email:</span>{" "}
              <input
                onChange={(e) => handleChange(e, "email")}
                value={editedData.email}
                className="p-2"
                name="email"
                type="text"
                placeholder="email"
              />
            </div>
            <div className="inputItem p-2 mt-3">
              <span>Location:</span>{" "}
              <input
                onChange={(e) => handleChange(e, "location")}
                value={editedData.location}
                className="p-2"
                name="location"
                type="text"
                placeholder="location"
              />
            </div>
            <div className="inputItem p-2 mt-3">
              <span>phone:</span>{" "}
              <input
                onChange={(e) => handleChange(e, "tel")}
                value={editedData.tel}
                className="p-2"
                name="telephone"
                type="number"
                placeholder="phone"
              />
            </div>
            <div className="inputItem p-2 mt-3 d-flex ">
              <span className="align-self-center">Bio:</span>{" "}
              <textarea
                onChange={(e) => handleChange(e, "bio")}
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

//new

// import React, { useContext, useEffect, useState } from 'react';
// import AuthContext from '../../context/auth/AuthContext';
// import { Modal, Button } from 'react-bootstrap';
// import editProfile from './editProfile.css';
// import axios from 'axios';

// function EditProfile({ modalStatus, editInfo, handleModal, user }) {
//   const authContext = useContext(AuthContext);
//   const { editProfile } = authContext;

//   const [editedData, seteditedData] = useState(undefined);
//   const [toggle, settoggle] = useState();

//   useEffect(async () => {
//     if (typeof user === 'object') {
//       await seteditedData(user);
//     } else {
//     }
//   }, [user]);

//   useEffect(async () => {
//     if (typeof user === 'object') {
//       await settoggle(1);
//     } else {
//     }
//   }, [editedData]);

//   const handleChange = (e, field) => {
//     let temp = { ...editedData };
//     temp[field] = e.target.value;
//     seteditedData(temp);
//   };

//   const [file, setFile] = useState('');
//   const [fileName, setFileName] = useState('choose file');
//   const [uploadFile, setUploadedFile] = useState({});

//   const onChange = (e) => {
//     setFile(e.target.files[0]);
//     setFileName(e.target.files[0].name);

//     console.log(fileName);
//     console.log(file);
//   };

//   const submitForm1 = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const res = await axios.post('/athena/file/upload', formData, {
//         header: {
//           'Content-Type ': 'multipart/form-data',
//         },
//       });
//       const { fileName, filePath } = res.data;
//       setUploadedFile({ fileName, filePath });
//     } catch (err) {
//       // if (err.response.status === 500) {
//       //   console.log('there was an issue with the servver');
//       // } else {
//       //   console.log(err.response.data.msg);
//       // }
//       console.log(err);
//     }
//   };
//   return (
//     toggle === 1 && (
//       <div className="mymodal" style={{ display: `${modalStatus}` }}>
//         <div className="modalCard">
//           <div className="modalHeader d-flex">
//             Modify profile info
//             <div
//               onClick={() => handleModal()}
//               className="bg-dark px-3 ml-auto "
//             >
//               <i class="fas fa-times text-white align-self-center"></i>
//             </div>
//           </div>
//           <form onSubmit={(e) => submitForm1(e)} className=" p-5">
//             <div class="form-group">
//               <label htmlFor="Profille Picture"> {fileName} </label>
//               <input
//                 type="file"
//                 class="form-control-file"
//                 id="exampleFormControlFile1"
//                 onChange={onChange}
//               />
//             </div>
//             <input
//               type="submit"
//               value="upload"
//               className="btn btn-danger p-3"
//             />
//           </form>
//           {uploadFile ? (
//             <div className="row mt-5">
//               <h3> {uploadFile.filname} </h3>
//               <img src={uploadFile.filePath} style={{ width: '100%' }} alt="" />
//             </div>
//           ) : null}
//         </div>
//       </div>
//     )
//   );
// }

// export default EditProfile;
