import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ViewBooking = () => {
  const [Bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/booking/all-bookings");
      setBookings(response.data.booking);
    } catch (error) {
      console.error("Error fetching Bookings", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDelete = async (bookingId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/booking/delete/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      });

      if (response.status === 200) {
        toast.success("Booking deleted successfully");
        fetchBookings();
      } else {
        toast.error("Booking deletion failed");
      }
    } catch (error) {
      toast.error("Error deleting Booking:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Booking List</h2>

      <table className="table table-striped border">
        <thead>
          <tr>
            <th>Name</th>
            <th>People</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.fullName}</td>
              <td>{booking.noOfPeople}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(booking._id)}>
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

export default ViewBooking;
