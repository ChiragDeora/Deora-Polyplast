import React from "react";
import product1 from "./images/product-1.jpg";
import product2 from "./images/product-2.jpg";
import product3 from "./images/product-3.jpg";
import product4 from "./images/product-4.jpg";

function SectionProducts() {
  return (
    <div id="Our-Services-and-Products">
      <div className="container">
        <h2 className="header">Our Services and Products</h2>
      </div>
      <div className="products">
        <Product imgSrc={product1} name="Product 1" />
        <Product imgSrc={product2} name="Product 2" />
        <Product imgSrc={product3} name="Product 3" />
        <Product imgSrc={product4} name="Product 4" />
      </div>
    </div>
  );
}

function Product({ imgSrc, name }) {
  return (
    <div className="product">
      <img src={imgSrc} alt={name} />
      <div className="container">
        <h3 className="subheader">{name}</h3>
      </div>
    </div>
  );
}

export default SectionProducts;
