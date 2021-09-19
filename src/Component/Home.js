import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let result = await axios.get("http://localhost:3001/products");
    setProducts(result.data);
  };
  return (
    <>
    <Navbar/>
    {
      localStorage.getItem('login')?
<div className="m-5 conatiner">
      <div className="row m-5">
        {products.map((item, index) => (
          <Product key={index} image={item.url} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
    :
    <h1 style={{display:"flex", justifyContent:"center", alignContent:"center"}}>Please login</h1>
    }
    
    </>
  );
};

export default Home;
