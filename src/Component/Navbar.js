
import React, {  useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [data, setData] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem("login")!==null){
      setData(true)
    }
  },[])
  const userLoggedOut = () => {
    localStorage.clear();
    setData(false);
  };
let name = localStorage.getItem('firstName');
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact
                </NavLink>
              </li>
              
            </ul>
            <div style={{textAlign:"left", width:"50vh", color:"wheat"}}>
                {
                  (localStorage.getItem('firstName'))?
                  
                  <h4>Welcome {name}</h4>
                  :
                  <h4>Welcome Guest</h4>
                }
              </div>
          </div>
        </div>
        {!data ? (
         <>
            <Link className="btn btn-outline-light me-3" to="/login">
              Login
            </Link>
            <Link className="btn btn-outline-light me-3" to="/register">
              Register
            </Link>
         </>
        ) : (
         
          <Link
            className="btn btn-outline-light me-3"
            to="/"
            onClick={()=>{userLoggedOut()}}
            
          >
            Logout
          </Link>
          
        )}
      </nav>
    </div>
  );
};

export default Navbar;
