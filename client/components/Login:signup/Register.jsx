import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/LoginImage.png";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="Register">
      <div className="register--body">
        <div className="form">
          <form>
            <h1>Register</h1>
            <input type="text" name="fullName" placeholder="Full name"></input>
            <input type="text" name="userName" placeholder="Username"></input>
            <input type="email" name="email" placeholder="Email"></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
            ></input>
            <div className="profile-photo">
              <input style={{ display: "none" }} type="file" id="file" />
              <span class="material-symbols-outlined">account_circle</span>
              <label htmlFor="file">Choose your profile picture</label>
            </div>
            <button type="submit" onClick={() => navigate(-1)}>
              Register
            </button>
          </form>
        </div>
        <div className="media--logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Register;
