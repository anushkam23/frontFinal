// // uploads.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// const AdminHome = () => {
//   return (
//     <div>
//       <h1>Welcome to Admin Dashboard</h1>
//       <Link to="/upload">Upload Images</Link> {/* Link to the new page */}
//     </div>
//   );
// };

// export default AdminHome;


import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      <Link to="/upload">Upload Images</Link> {/* Link to the correct route */}
    </div>
  );
};

export default AdminHome;
