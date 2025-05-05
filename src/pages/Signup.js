import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    talentCategory: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    navigate('/profile');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Join Our Community</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="talentCategory">Your Primary Talent</label>
            <select
              id="talentCategory"
              name="talentCategory"
              value={formData.talentCategory}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
              <option value="art">Art</option>
              <option value="dance">Dance</option>
              <option value="photography">Photography</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;