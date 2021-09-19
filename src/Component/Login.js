import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";

const Login = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  const history = useHistory();
  const [loginCredens, setLoginCredens] = useState({
    email: "",
    password: "",
  });

  const getInputvalue = (e) => {
    setLoginCredens({ ...loginCredens, [e.target.name]: e.target.value });
  };
  const loginRequest = async (e) => {
    e.preventDefault();
    let validation = await axios.get(
      `http://localhost:3001/users?q=${loginCredens.email}`
    );

    if (validation.data.length > 0) {
      if (
        validation.data[0].email === loginCredens.email &&
        validation.data[0].password === loginCredens.password &&
        validation.data.length === 1 &&
        validation.data[0].admin===false
      ) {
        
        localStorage.setItem("login", JSON.stringify(validation.data[0].email));
        localStorage.setItem("firstName",JSON.stringify(validation.data[0].firstName));

        history.push("/");
      } else {
        
        localStorage.setItem("login", JSON.stringify(validation.data[0].email));
        localStorage.setItem("firstName",JSON.stringify(validation.data[0].firstName));
        localStorage.setItem("admin", JSON.stringify(validation.data[0].admin));

        history.push("/");
      }
    } else {
      alert("Invalid user or Password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 border shadow p-5">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <br />
        <form
          className="ms-5 me-5"
          onSubmit={(e) => {
            loginRequest(e);
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="off"
              name="email"
              value={loginCredens.email}
              onChange={(e) => {
                getInputvalue(e);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="off"
              name="password"
              value={loginCredens.password}
              onChange={(e) => {
                getInputvalue(e);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
