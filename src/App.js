// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CreateBlog from "./pages/admin/blogs/CreateBlog";
// import ViewBlogs from "./pages/admin/blogs/ViewBlogs";
// import ViewBooking from "./pages/admin/booking/ViewBooking";
// import Dashboard from "./pages/admin/Dashboard";
// import { ToastContainer } from "react-toastify";
// import EditBlog from "./pages/admin/blogs/EditBlog";
// // import BlogList from "./pages/BlogList";
// import SignUp from "./pages/SignUp";
// import UserDetails from "./pages/userDetails";
// import Upload from "./pages/ImageUpload";
// import Reset from "./pages/reset";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <ToastContainer />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/blog-list" element={<BlogList />} /> */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<SignUp />} />
//           <Route path="/reset" element={<Reset />} />
//           <Route path="/userDetails" element={<UserDetails />} />
//           <Route path="/upload" element={<Upload />} />

//           <Route path="/admin" element={<Dashboard />} />
//           <Route path="/admin/create-blog" element={<CreateBlog />} />
//           <Route path="/admin/edit-blog/:id" element={<EditBlog />} />
//           <Route path="/admin/view-blogs" element={<ViewBlogs />} />
//           <Route path="/admin/view-booking" element={<ViewBooking />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;






import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlog from "./pages/admin/blogs/CreateBlog";
import ViewBlogs from "./pages/admin/blogs/ViewBlogs";
import ViewBooking from "./pages/admin/booking/ViewBooking";
import Dashboard from "./pages/admin/Dashboard";
import { ToastContainer } from "react-toastify";
import EditBlog from "./pages/admin/blogs/EditBlog";
import SignUp from "./pages/SignUp";
import UserDetails from "./pages/userDetails";
import Upload from "./pages/ImageUpload";
import Reset from "./pages/reset";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/upload" element={<Upload />} />

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/create-blog" element={<CreateBlog />} />
          <Route path="/admin/edit-blog/:id" element={<EditBlog />} />
          <Route path="/admin/view-blogs" element={<ViewBlogs />} />
          <Route path="/admin/view-booking" element={<ViewBooking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
