





import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateUser() {
    const location = useLocation();
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (location.state) {
            setId(location.state._id || "");
            setFname(location.state.fname || "");
            setLname(location.state.lname || "");
            setEmail(location.state.email || "");
        }
    }, [location.state]);

    const updateData = async () => {
        try {
            const response = await fetch("https://backfinal-1-llx1.onrender.com/updateUser", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    id: id,
                    fname: fname,
                    lname: lname,
                }),
            });

            if (!response.ok) {
                const error = await response.text();
                throw new Error(error);
            }

            const data = await response.json();
            console.log(data);

            if (data.status === "ok") {
                // Show alert
                alert("Profile has been edited.");
                // Redirect to userDetails page
                navigate('/userDetails');
            } else {
                console.error("Failed to update user details:", data);
            }
        } catch (error) {
            console.error("Error while updating user details:", error);
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h2>Edit Profile</h2>
                First Name <br />
                <input placeholder="First Name" className="form-control" 
                    value={fname} 
                    onChange={(e) => setFname(e.target.value)} /> <br />
                
                Last Name <br />
                <input placeholder="Last Name" className="form-control" 
                    value={lname} 
                    onChange={(e) => setLname(e.target.value)} /> <br />
                Email<br />
                <input placeholder="Email" className="form-control" 
                    value={email} 
                    disabled /> <br />
                <button onClick={updateData}>Update Details</button>
            </div>
        </div>
    );
}

export default UpdateUser;
