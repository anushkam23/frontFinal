import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/blog/all-blogs");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  const handleEdit = (blogId) => {
    navigate(`/admin/edit-blog/${blogId}`);
  };

  const handleDelete = async (blogId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/blog/delete/${blogId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      });

      if (response.status === 200) {
        toast.success("Blog deleted successfully");
        fetchBlogs();
      } else {
        toast.error("Blog deletion failed");
      }
    } catch (error) {
      toast.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-between">
        <h2>Appointment List</h2>
        <button onClick={() => navigate("/admin/create-blog")} className="btn btn-success btn-sm">
          Add Appointments
        </button>
      </div>

      <table className="table table-striped border">
        <thead>
          <tr>
            <th>Title</th>
            <th>Cover Image</th>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>
                {blog.coverImage ? (
                  <img
                    src={`http://localhost:5000/uploads/blogs/${blog.coverImage}`}
                    alt="Cover"
                    style={{ maxWidth: "50px" }}
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td>{blog.description}</td>
              <td>{blog.date}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(blog._id)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(blog._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBlogs;
