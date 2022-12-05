import React, { useState } from "react";
import "../Style/Style.css";

function Login() {
  return (
    <div className="form">
      Login
      <div className="form-body">
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
      </div>
      <div class="footer">
        <button type="submit" class="btn">
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
