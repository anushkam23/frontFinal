import React from "react";
import ViewBlogs from "./blogs/ViewBlogs";
import ViewBooking from "./booking/ViewBooking";

const Dashboard = () => {
  return (
    <div>
      <ViewBlogs />
      <ViewBooking />
    </div>
  );
};

export default Dashboard;
