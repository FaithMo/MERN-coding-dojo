import React, { useState } from "react";
import "../Style/Style.css";

function User() {
  return (
    <div className="form">
      Register
      <div className="form-body">
        <div className="username">
          First Name: <br />
          <label className="form__label" for="firstName"></label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          Last Name:
          <br />
          <label className="form__label" for="lastName"></label>
          <input
            type="text"
            name=""
            id="lastName"
            className="form__input"
            placeholder="LastName"
          />
        </div>
        <div className="email">
          Email:
          <br />
          <label className="form__label" for="email"></label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
          />
        </div>
        <div className="password">
          Password:
          <br />
          <label className="form__label" for="password"></label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          Confirm Password:
          <br />
          <label className="form__label" for="confirmPassword"></label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default User;
