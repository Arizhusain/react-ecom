import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  const history = useHistory();
  const [loginCredens, setLoginCredens] = useState({
    email:"",
    password:""
  })

  const getInputvalue = (e)=>{
    setLoginCredens({...loginCredens,[e.target.name]:e.target.value});
  }
  const loginRequest = async (e) => {
    e.preventDefault();
    // console.log(loginCredens.email, loginCredens.password)
    let validation = await axios.get(`http://localhost:3001/users?q=${loginCredens.email}`)
    
    // console.log(validation.data[0]);
    // console.log(typeof(validation.data[0].email), validation.data[0].email);
    // console.log(typeof(validation.data[0].password), validation.data[0].password);
    // console.log(typeof(validation.data.length),validation.data.length);
    // console.log(typeof(loginCredens.email), loginCredens.email);
    // console.log(typeof(loginCredens.password), loginCredens.password);
    
    if(validation.data[0].email===loginCredens.email && validation.data[0].password===loginCredens.password && validation.data.length===1){
      // alert("Login Successful")
      localStorage.setItem('login', JSON.stringify(validation.data[0].email));
      localStorage.setItem('firstName', JSON.stringify(validation.data[0].firstName));
      
      history.push('/validateLogin')
    }
    else{
      alert("Invalid user or Password");
    }
  }



  return (
    <div className="container mt-5 border shadow p-5">
      <h1 style={{ textAlign: "center" }}>Login</h1><br/>
      <form className="ms-5 me-5" onSubmit={(e)=>{loginRequest(e)}}>
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
            onChange={(e)=>{getInputvalue(e)}}
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
            onChange={(e)=>{getInputvalue(e)}}
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
