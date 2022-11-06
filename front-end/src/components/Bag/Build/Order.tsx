import "./OrderStyle.scss";
import React from 'react';
import img from "../../Products/Product/product.png";

interface Props {};

const Order: React.FC = () => {
  return (
    <div className="ordered-product-section">
      <div className="ordered-product-section__img-section">
        <img src={img} alt="" />
      </div>
      <div className="ordered-product-section__document-section">
        <div className="ordered-product-section__document-section__content">
          <h4>Black cute mask - hand made</h4>
          <p>M | USD 650.00</p>
        </div>
        <button className="ordered-product-section__document-section__remove-btn">remove</button>
      </div>
    </div>
  )
}

export default Order