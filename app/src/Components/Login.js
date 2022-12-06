import React, { useState } from "react";
import "../Style/Style.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = () => {
    const user = {
      email,
      password,
    };
    console.log(user);
    try {
      axios
        .get("http://localhost:4000", user)
        .then((res) => console.log(res.data));
    } catch (err) {
      console.log(err.stack);
    }
  };
  return (
    <div className="form">
      Login
      <div className="form-body">
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
      </div>
      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Login
        </button>
      </div>
      <div>
        <h5>BLACK BELT</h5>
        <h6>Upon successful Registration amd Login, user goes to dashboard</h6>
      </div>
    </div>
  );
}
export default Login;
