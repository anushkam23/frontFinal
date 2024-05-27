// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { Component, useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// export default function UserHome() {
//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./sign-in";
//   };

//   useEffect(() => {
//     fetch("https://backfinal-1-llx1.onrender.com/userData", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         token: window.localStorage.getItem("token"),
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setUserData(data.data);
//       });
//   }, []);


//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <FontAwesomeIcon icon={faUserPlus} />
//         <div>
//           Name<h1>{userData.fname}</h1>
//           Email <h1>{userData.email}</h1>
//           <br />
//           <button onClick={logOut} className="btn btn-primary">
//             Log Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function UserHome() {
const navigate=useNavigate();
const [userData,setUserData]=useState("");

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./";
  };

  useEffect(() => {
    fetch("https://backfinal-1-llx1.onrender.com/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data.data);
      });
  }, []);


  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
      <FontAwesomeIcon icon={faUserPlus} size="xl" onClick={()=>navigate("/updateUser",{state:userData})}/> Edit Profile
        <br/>
        <br/>
      
        <div>
         Name   <h5>{userData.fname}{userData.lname}</h5>
          Email <h5>{userData.email}</h5>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
