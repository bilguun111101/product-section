import "./DetailStyle.scss";
import React, { useState } from 'react'
import Loading from "../Loading/Loading";
import img from "../Products/Product/product.png";
import { ChooseImgBtn } from './Build/BuildDetail';

const Detail: React.FC = () => {
  const array = new Array(20).fill(3);
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <section className="detail-section">
        <div className="detail-section__container">
            <div className="detail-section__container__image-section">
              <div className='image-container'>
                <img src={img} alt="" />
              </div>
              <div className='choose-image-btns'>
                <ul className='choose-image-btns__section'>
                  {array?.map((el, idx) => <ChooseImgBtn key={idx} img={img} />)}
                </ul>
              </div>
            </div>
            <div className="detail-section__container__document-section">
              <p className='detail-section__container__document-section__type'>UNDERCOVER</p>
              <h1 className='detail-section__container__document-section__name'>WIDE LEG PANTS</h1>
              <p className='detail-section__container__document-section__price'>USD 320.00</p>
              <div className="detail-section__container__document-section__information">
                <div className="information-inputs">
                  <div className="information-input">
                    <p>Size</p>
                    <select className='information-input__size'>
                      <option>XL</option>
                      <option>XXL</option>
                      <option>XXXL</option>
                    </select>
                  </div>
                  <div className="information-input">
                    <p>QTY</p>
                    <select className='information-input__size'>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
                <div className="add-btn-section">
                  <button className='add-btn'>Add to bag</button>
                </div>
              </div>
              <div className="detail-section__container__document-section__read-section">
                <div className={`read-section-detail ${readMore && "active-read-more"}`}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis, dignissimos laudantium culpa voluptatem quos repellat voluptatum explicabo placeat neque libero inventore nam impedit obcaecati perferendis assumenda pariatur deleniti eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maxime voluptas rerum omnis! Dolores molestias hic unde dolorum vero eum animi rerum laboriosam nulla similique? Tenetur corporis id illum obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus corrupti consequuntur vel id assumenda deleniti cum possimus saepe et voluptatem. Voluptates temporibus ipsum amet atque provident accusantium consectetur illum impedit?</p>
                </div>
                <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>{readMore ? "hide" : "Read more"}</button>
              </div>
              <div className="detail-section__container__document-section__designed-by-section">
                <div className="profile-image-section">
                  <img src="https://i.guim.co.uk/img/media/0fc6369666e16f6535804e0b125199afb872c405/246_0_2248_1350/master/2248.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27479375db096cdc4f418382282fb218" alt="" />
                </div>
                <h4>{`Designed by Reinhold Weiss`}</h4>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Detail