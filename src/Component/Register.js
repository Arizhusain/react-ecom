import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";

const Register = () => {
  const history = useHistory();
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    admin:false
  });

  const inputValues = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
    // console.log(register);
  };

  const formSubmitted = async (e) => {
    e.preventDefault();
    if (register.password === register.confirmPassword) {
      await axios.post("http://localhost:3001/users", register);
      history.push("/");
    } else {
      alert("Password doesn't match");
    }
  };

  return (
    <><Navbar/>
    <div className="container mt-5 border shadow p-5">
      <h1 style={{ textAlign: "center" }}>Register Yourself</h1>
      <br/>
      <form
        className="container ms-5 me-5"
        onSubmit={(e) => {
          formSubmitted(e);
        }}
      >
        <div className="mb-3">
          <input
            type="text"
            name="firstName"
            autoComplete="off"
            className="form-control"
            placeholder="First Name"
            required
            onChange={(e) => {
              inputValues(e);
            }}
            value={register.firstName}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="lastName"
            autoComplete="off"
            className="form-control"
            required
            placeholder="Last name"
            onChange={(e) => {
              inputValues(e);
            }}
            value={register.lastName}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            autoComplete="off"
            className="form-control"
            required
            placeholder="Email Address"
            onChange={(e) => {
              inputValues(e);
            }}
            value={register.email}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="phone"
            autoComplete="off"
            className="form-control"
            required
            placeholder="Phone Number"
            onChange={(e) => {
              inputValues(e);
            }}
            value={register.phone}
          />
          <div className="form-text">
            We'll never share your Phone number with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            autoComplete="off"
            className="form-control"
            placeholder="Password"
            required
            onChange={(e) => {
              inputValues(e);
            }}
            value={register.password}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="confirmPassword"
            autoComplete="off"
            className="form-control"
            required
            placeholder="Confirm Password"
            onChange={(e) => {
              inputValues(e);
            }}
            value={register.confirmPassword}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div></>
  );
};

export default Register;
