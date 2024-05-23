import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    coverImage: null,
    date: "",
  });

  const token = localStorage.getItem("auth-token");

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "coverImage" ? files[0] : value,
    }));
  };

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/single-blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { title, description, coverImage, date } = response.data.blog;
        setFormData({
          title,
          description,
          coverImage,
          date,
        });
      } catch (error) {
        toast.error(error?.response?.data?.message || "Error fetching blog details");
      }
    };

    fetchBlogDetails();
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("coverImage", formData.coverImage);
      formDataToSend.append("date", formData.date);

      const response = await axios.put(`http://localhost:5000/api/blog/edit/${id}`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success("Blog updated...");
      }
    } catch (error) {
      toast.error(error.response.data.message || "Blog update failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-between">
        <h2>Edit Appointment</h2>
        <button onClick={() => navigate(`/admin`)} className="btn btn-success btn-sm">
          View Appointment
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coverImage" className="form-label">
            Cover Image:
          </label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            className="form-control"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
