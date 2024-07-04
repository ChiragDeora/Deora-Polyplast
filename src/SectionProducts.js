import React from "react";
import ProductImage1 from "./images/product-1.jpg";
import ProductImage2 from "./images/product-2.jpg";
import ProductImage3 from "./images/product-3.jpg";
import ProductImage4 from "./images/product-4.jpg";

function SectionProducts() {
  const products = [
    {
      imgSrc: ProductImage1,
    },
    {
      imgSrc: ProductImage2,
    },
    {
      imgSrc: ProductImage3,
    },
    {
      imgSrc: ProductImage4,
    },
  ];

  return (
    <div id="Our-Products">
      <div className="container">
        <h2 className="header">Our Products</h2>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <Product key={index} imgSrc={product.imgSrc} />
        ))}
      </div>
      <div className="container">
        <p>
          Our current offerings in the Re-Ro Series are thoughtfully designed
          with a strong emphasis on quality and innovation. Each product within
          this series has been meticulously crafted with precision and attention
          to detail. Engineered for the food industry, our precision-designed
          containers guarantee product protection and freshness. Utilizing
          advanced injection molding technology, they withstand rigorous
          handling and environmental conditions.
        </p>
        <p>
          Crafted from eco-friendly, food-grade materials, our reusable
          containers offer convenience and sustainability. Elevate your brand
          with our In-Mold Labeling (IML) option, seamlessly integrating
          high-quality labels during manufacturing. With intricate graphics and
          durable finishes, our IML containers captivate consumers and reinforce
          brand recognition.
        </p>
      </div>
    </div>
  );
}

function Product({ imgSrc }) {
  return (
    <div className="product">
      <img src={imgSrc} alt="Product" />
    </div>
  );
}

export default SectionProducts;
