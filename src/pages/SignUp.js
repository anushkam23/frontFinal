// import React, { Component, useState } from "react";

// export default function SignUp() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("");
//   const [secretKey, setSecretKey] = useState("");

//   const handleSubmit = (e) => {
//     if (userType == "Admin" && secretKey != "AdarshT") {
//       e.preventDefault();
//       alert("Invalid Admin");
//     } else {
//       e.preventDefault();

//       console.log(fname, lname, email, password);
//       fetch("http://localhost:5000/register", {
//         method: "POST",
//         crossDomain: true,
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify({
//           fname,
//           email,
//           lname,
//           password,
//           userType,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data, "userRegister");
//           if (data.status == "ok") {
//             alert("Registration Successful");
//           } else {
//             alert("Something went wrong");
//           }
//         });
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Sign Up</h3>
//           <div>
//             Register As
//             <input
//               type="radio"
//               name="UserType"
//               value="User"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             User
//             <input
//               type="radio"
//               name="UserType"
//               value="Admin"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             Admin
//           </div>
//           {userType == "Admin" ? (
//             <div className="mb-3">
//               <label>Secret Key</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Secret Key"
//                 onChange={(e) => setSecretKey(e.target.value)}
//               />
//             </div>
//           ) : null}

//           <div className="mb-3">
//             <label>First name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="First name"
//               onChange={(e) => setFname(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Last name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Last name"
//               onChange={(e) => setLname(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Sign Up
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Already registered <a href="/sign-in">sign in?</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";

// export default function SignUp() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     roleType: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation
//     if (!formData.fullName || !formData.roleType || !formData.email || !formData.password || !formData.confirmPassword) {
//       alert("All fields are required");
//       return;
//     }

//     // Validate password match
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords don't match");
//       return;
//     }

//     try {
//       // Send form data to backend
//       const response = await fetch("http://localhost:5000/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       // Check if user registered successfully
//       if (response.ok) {
//         alert(data.message);
//         // Optionally, redirect to login page or perform any other action
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Unable to register. Please try again.");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [id]: value
//     }));
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Sign Up</h3>
//           <div className="mb-3">
//             <label>Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               className="form-control"
//               placeholder="Enter full name"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Role Type</label>
//             <input
//               type="text"
//               id="roleType"
//               className="form-control"
//               placeholder="Enter role type"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="form-control"
//               placeholder="Confirm password"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Sign Up
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Already registered <a href="/sign-in">sign in?</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }


















// import React, { Component, useState } from "react";
// // import app from './firebase_config'
// export default function SignUp() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("");
//   const [secretKey, setSecretKey] = useState("");

//   const handleSubmit = (e) => {
//     if (userType == "Admin" && secretKey != "AdarshT") {
//       e.preventDefault();
//       alert("Invalid Admin");
//     } else {
//       e.preventDefault();

//       console.log(fname, lname, email, password);
//       fetch("http://localhost:5000/register", {
//         method: "POST",
//         crossDomain: true,
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify({
//           fname,
//           email,
//           lname,
//           password,
//           userType,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data, "userRegister");
//           if (data.status == "ok") {
//             alert("Registration Successful");
//           } else {
//             alert("Something went wrong");
//           }
//         });
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Sign Up</h3>
//           <div>
//             Register As
//             <input
//               type="radio"
//               name="UserType"
//               value="User"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             User
//             <input
//               type="radio"
//               name="UserType"
//               value="Admin"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             Admin
//           </div>
//           {userType == "Admin" ? (
//             <div className="mb-3">
//               <label>Secret Key</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Secret Key"
//                 onChange={(e) => setSecretKey(e.target.value)}
//               />
//             </div>
//           ) : null}

//           <div className="mb-3">
//             <label>First name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="First name"
//               onChange={(e) => setFname(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Last name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Last name"
//               onChange={(e) => setLname(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Sign Up
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             {/* Already registered <a href="/sign-in">sign in?</a> */}
//             Already registered <a href="/login">sign in?</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }







import React, { useState } from "react";
import './Signup.css'; // Import the CSS file

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType === "Admin" && secretKey !== "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("https://backfinal-1-llx1.onrender.com/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType === "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
