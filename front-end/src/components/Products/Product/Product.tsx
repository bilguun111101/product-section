import img from "./product.png";
import "./ProductStyle.scss";
import React from 'react';

const Product: React.FC = () => {
  return (
    <section className="product-section">
        <img src={img} alt="" />
    </section>
  )
}

export default Product