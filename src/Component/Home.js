import axios from "axios";
import React, { useEffect, useState } from "react";
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
    {
      localStorage.getItem('login')?
<div className="m-5">
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
