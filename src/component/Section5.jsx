import React, { useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
// import pointer from "./Images/pointer.png";
import { toast } from "react-toastify";

export default function Section5() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    noOfPeople: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server using Axios
      const response = await axios.post("http://localhost:5000/api/booking/create", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        noOfPeople: parseInt(formData.noOfPeople, 10), // Ensure it's a number
      });

      // Handle the response as needed
      console.log(response.data);
      toast.success("Booking done !")
    } catch (error) {
      // Handle error
      console.error("Form submission failed", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="fifthcat" id="Section5">
        <h1 className="ycolor">
         GET IN TOUCH
        </h1>
        {/* <p>Book Your Table Now And Have A Great Meal!</p> */}
        <form onSubmit={handleSubmit}>
          <div className="page-container">
            <div className="column1">
              <span className="details">Your Full Name ?</span>
              <input
                type="text"
                placeholder="Write your name here.."
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                id="p1"
              />
              <span className="details">How many people ?</span>
              <input
                type="number"
                placeholder="Enter the number of people"
                name="noOfPeople"
                value={formData.noOfPeople}
                onChange={handleChange}
                id="p2"
              />
              <span className="details">What is the date?</span>
              <input
                type="date"
                placeholder="Enter the date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                id="p3"
              />
            </div>

            <div className="column2">
              <span className="details">Your email address ?</span>
              <input
                type="email"
                placeholder="Write your email here..."
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="p4"
              />
              <span className="details">What time ?</span>
              <input
                type="time"
                placeholder="Enter time..."
                name="time"
                value={formData.time}
                onChange={handleChange}
                id="p5"
              />
              <span className="details">Your phone number ?</span>
              <input
                type="tel"
                placeholder="Write your number here"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                id="p6"
                maxLength={10}
              />
            </div>
          </div>
          <button type="submit" className="btn-box">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
