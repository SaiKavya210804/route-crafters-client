import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const cityStateNationality = {
  "New York": { state: "New York", nationality: "USA" },
  "Los Angeles": { state: "California", nationality: "USA" },
  "Toronto": { state: "Ontario", nationality: "Canada" },
  "Vancouver": { state: "British Columbia", nationality: "Canada" }
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    city: "",
    state: "",
    nationality: ""
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };
    
    if (name === "city" && cityStateNationality[value]) {
      updatedData.state = cityStateNationality[value].state;
      updatedData.nationality = cityStateNationality[value].nationality;
    }

    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    //raise axios

    setIsSuccess(true);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {isSuccess ? (
          <div className="success-message">
            <h2>Signup Successful!</h2>
            <p>Redirecting to homepage...</p>
          </div>
        ) : (
          <>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required />
              
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
              
              <label>Phone Number</label>
              <input type="text" name="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} required />
              
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
              
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
              
              <label>City</label>
              <select name="city" value={formData.city} onChange={handleChange} required className="custom-select">
                <option value="">Select a city</option>
                {Object.keys(cityStateNationality).map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              
              <label>State</label>
              <select name="state" value={formData.state} onChange={handleChange} required className="custom-select">
                <option value="">Select a state</option>
                {[...new Set(Object.values(cityStateNationality).map(item => item.state))].map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              
              <label>Nationality</label>
              <select name="nationality" value={formData.nationality} onChange={handleChange} required className="custom-select">
                <option value="">Select a nationality</option>
                {[...new Set(Object.values(cityStateNationality).map(item => item.nationality))].map(nationality => (
                  <option key={nationality} value={nationality}>{nationality}</option>
                ))}
              </select>
              
              <button type="submit">Sign Up</button>
            </form>
            
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;