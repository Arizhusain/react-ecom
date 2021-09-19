import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import AddProduct from "./Component/Products/AddProduct";
import EditProduct from "./Component/Products/EditProduct";
import ViewProduct from "./Component/Products/ViewProduct";
import ProductsList from "./Component/Products/ProductsList";

import AddUser from "./Component/Users/AddUser";
import EditUser from "./Component/Users/EditUser";
import ViewUser from "./Component/Users/ViewUser";
import UserList from "./Component/Users/UserList";



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


const App = () => {
  return (
    <div>
     
      <Router>
      
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>

          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>

          <Route exact path='/add-product' component={AddProduct}/>
          <Route exact path='/edit-product' component={EditProduct}/>
          <Route exact path='/view-product' component={ViewProduct}/>
          <Route exact path='/products' component={ProductsList}/>

          <Route exact path='/add-user' component={AddUser}/>
          <Route exact path='/edit-user' component={EditUser}/>
          <Route exact path='/view-user' component={ViewUser}/>
          <Route exact path='/users' component={UserList}/>


        </Switch>
      </Router>
     
    </div>
  );
};

export default App;
