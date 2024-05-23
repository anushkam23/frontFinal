// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       if (!formData.email || !formData.password) {
//         return toast.error("All fields required...");
//       }
//       const response = await axios.post("http://localhost:5000/api/auth/login", formData);
//       console.log(response.data);
//       toast.success("Login successfull...");
//       if (response?.data?.user?.role === "admin") {
//         localStorage.setItem("auth-token",response?.data?.accessToken)
//         navigate("/admin");
//       }
//     } catch (error) {
//       toast.error("Login failed...");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [id]: value,
//     }));
//   };

//   return (
//     <div className="container mt-5">
//       <div className="col-md-4 offset-md-4 shadow rounded-3 p-3 border border-primary border-2">
//         <h2 className="text-center mb-4 fw-bold">Sign In</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email:
//             </label>
//             <input
//               type="text"
//               id="email"
//               className="form-control"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">
//             Login
//           </button>
//           <div className="text-center mt-3">
//             <p>Don't have an account? <a href="/register">Sign Up</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { Component, useState } from "react";
// import {Link} from "react-router-dom";
// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log(email, password);
//     fetch("http://localhost:5000/login-user", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userRegister");
//         if (data.status == "ok") {
//           alert("login successful");
//           window.localStorage.setItem("token", data.data);
//           window.localStorage.setItem("loggedIn", true);

//           window.location.href = "./userDetails";
//         }
//       });
//   }

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Sign In</h3>

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

//           <div className="mb-3">
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="customCheck1"
//               />
//               <label className="custom-control-label" htmlFor="customCheck1">
//                 Remember me
//               </label>
//             </div>
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             <a href="/register">Sign Up</a>
//           </p>
//           <p className="forgot-password text-right">
//             Forgot your password? <Link to="/reset">Reset here</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log(email, password);
//     fetch("http://localhost:5000/login-user", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userRegister");
//         if (data.status === "ok") {
//           alert("login successful");
//           window.localStorage.setItem("token", data.data);
//           window.localStorage.setItem("loggedIn", true);

//           window.location.href = "./userDetails";
//         }
//       });
//   }

//   return (
//     <div style={styles.authWrapper}>
//       <div style={styles.authInner}>
//         <form onSubmit={handleSubmit}>
//           <h3>Sign In</h3>

//           <div style={styles.mb3}>
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//               style={styles.formControl}
//             />
//           </div>

//           <div style={styles.mb3}>
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={(e) => setPassword(e.target.value)}
//               style={styles.formControl}
//             />
//           </div>

//           <div style={styles.mb3}>
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="customCheck1"
//               />
//               <label className="custom-control-label" htmlFor="customCheck1">
//                 Remember me
//               </label>
//             </div>
//           </div>

//           <div style={styles.dGrid}>
//             <button type="submit" className="btn btn-primary" style={styles.btn}>
//               Submit
//             </button>
//           </div>
//           <p className="forgot-password text-right" style={styles.forgotPassword}>
//             <a href="/register">Sign Up</a>
//           </p>
//           <p className="forgot-password text-right" style={styles.forgotPassword}>
//             Forgot your password? <Link to="/reset">Reset here</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'; // Import the CSS file

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("https://backfinal-1-llx1.onrender.com/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        }
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

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

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password">
            <a href="/register">Sign Up</a>
          </p>
          <p className="forgot-password">
            Forgot your password? <Link to="/reset">Reset here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
