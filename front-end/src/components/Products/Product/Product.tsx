// import img from "./product.png";
import "./ProductStyle.scss";
import React from 'react';
import { Props } from "../../Types/ProductType";
import { useNavigate } from "react-router-dom";

const Product: React.FC<Props> = (props) => {
  const { name, img, price, id } = props;
  const navigate = useNavigate();
  const jump = () => {
    navigate(id);
  }
  return (
    <div className="product-section">
      <div className="product-section__image-container" onClick={jump}>
        <div className="product-section__image-container__image-content">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="product-section__document-container">
        <div className="product-section__document-container__document-content">
          <p>{name}</p>
          <h5>{`USD ${price}`}</h5>
        </div>
      </div>
    </div>
  )
}

export default Product