import React, { useState } from "react";
import "../Style/Style.css";

import axios from "axios";

function User() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    const user = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    console.log(user);
    try {
      axios
        .post("http://localhost:4000", user)
        .then((res) => console.log(res.data));
    } catch (err) {
      console.log(err.stack);
    }
  };

  return (
    <div className="form">
      Register
      <div className="form-body">
        <div className="username">
          First Name: <br />
          <label className="form__label" for="firstName"></label>
          <input
            onChange={(e) => handleInputChange(e)}
            className="form__input"
            type="text"
            id="firstName"
            value={firstName}
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          Last Name:
          <br />
          <label className="form__label" for="lastName"></label>
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input"
            placeholder="LastName"
          />
        </div>
        <div className="email">
          Email:
          <br />
          <label className="form__label" for="email"></label>
          <input
            onChange={(e) => handleInputChange(e)}
            type="email"
            id="email"
            value={email}
            className="form__input"
            placeholder="Email"
          />
        </div>
        <div className="password">
          Password:
          <br />
          <label className="form__label" for="password"></label>
          <input
            onChange={(e) => handleInputChange(e)}
            className="form__input"
            type="password"
            id="password"
            value={password}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          Confirm Password:
          <br />
          <label className="form__label" for="confirmPassword"></label>
          <input
            onChange={(e) => handleInputChange(e)}
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" className="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default User;
