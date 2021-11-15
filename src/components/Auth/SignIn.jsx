import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

const SignIn = ({setIsAuthorized}) => {
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('isAuthorized', true)
    setIsAuthorized(true)
    history.push('/')
  };
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth__title">Login</h2>
      <label className="auth__label">
        Email:
        <input
          type="email"
          placeholder="Email"
          required
          className="auth__input"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="auth__label">
        Password:
        <input
          type="password"
          placeholder="Password"
          required
          className="auth__input"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type="submit" className="auth__btn">
        Login
      </button>
    </form>
  );
};

export default SignIn;
