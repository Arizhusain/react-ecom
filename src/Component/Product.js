import React from "react";

const Product = (props) => {
  
  return (
    <>
      <div className="col-lg-2 border shadow m-3">
        <img className="thumbnail sm-5" src={props.image} height="60%" width="100%" alt="product"/>
        <div className="box-element product">
          <h6>
            <strong>{props.name}</strong>
          </h6>
          <hr />
          <div className="m-3">
          <button
            data-product="1"
            data-action="add"
            className="btn btn-outline-secondary add-btn update-cart"
          >
            Add to cart
          </button>
          <a className="btn btn-outline-success ms-3" href="/">
            View
          </a>
          <h4 style={{ display: "inline-block", float: " right" }}>{props.price}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
