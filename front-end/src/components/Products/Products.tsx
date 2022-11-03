import React from 'react'
import "./ProductsStyle.scss";
import Product from './Product/Product';
import img from "./Product/product.png";
import Loading from '../Loading/Loading';
import { Props } from '../Types/ProductType';

const data: Props = 
  {
    name: "Champion reverse coat-men",
    price: 665.00,
    img,
    id: "detail",
    detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, cumque similique? Numquam id omnis a optio corporis incidunt minima, praesentium enim. Voluptatem necessitatibus maiores voluptas quas obcaecati animi mollitia voluptates?",
  }

const Products: React.FC = () => {
  const datas = new Array(20).fill(data);
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
        {
          !datas ? <Loading /> :
          datas?.map((el, idx) => <Product key={idx} name={el.name} img={el.img} id={el._id} detail={el.detail} price={el.price} />)
        }
      </div>
    </section>
  )
}

export default Products