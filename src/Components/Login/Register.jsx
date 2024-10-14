import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    // Add logic for password strength: at least 8 characters, one uppercase, one lowercase, etc.
    return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is valid and password is strong
    if (!email.includes("@")) {
      setError("Invalid email format. Please include an '@' symbol.");
    } else if (!validatePassword(password)) {
      setError("Password must be at least 8 characters, include uppercase and lowercase letters.");
    } else {
      // Registration is successful
      navigate("/"); // Redirect to login page
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        maxWidth: "300px",
        margin: "50px auto",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "5px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              margin: "10px 0",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              margin: "10px 0",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              margin: "10px 0",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              cursor: "pointer",
              width: "100%",
              borderRadius: "4px",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "green";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "black";
              e.target.style.color = "white";
            }}
          >
            Register
          </button>
        </div>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
      <p style={{ marginTop: "15px" }}>
        Already have an account? <a href="/" style={{ color: "blue" }}>Login here</a>
      </p>
    </div>
  );
};

export default Register;
