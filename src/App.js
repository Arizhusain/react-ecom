import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ValidateLogin from "./Component/ValidateLogin";

const App = () => {
  return (
    <div>
     
      <Router>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/validateLogin' component={ValidateLogin}/>
        </Switch>
      </Router>
     
    </div>
  );
};

export default App;
