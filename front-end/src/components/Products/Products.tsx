import React from 'react'
import Product from './Product/Product';
import "./ProductsStyle.scss";

const Products: React.FC = () => {
  const datas = new Array(20).fill(1);
  console.log(datas);
  return (
    <section className="products-section">
      <div className="products-section__amount">
        <p>27 Items</p>
        <div className="products-section__amount__gender">
          <button>All</button>
          <button>Men's</button>
          <button>Women's</button>
        </div>
        <p>Sort by</p>
      </div>
      <div className="products-section__container">
        {datas?.map((el, idx) => <Product key={idx} />)}
      </div>
    </section>
  )
}

export default Products