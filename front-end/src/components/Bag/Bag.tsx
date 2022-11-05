import "./BagStyle.scss";
import React from 'react';

const Bag: React.FC = () => {
  return (
    <div className="bag-section">
        <div className="bag-section__contact-information">
            <div className="bag-section__contact-information__container">
                <h1 className="title">Contact information</h1>
                <div className="email-section">
                    <input type="email" placeholder="Your email *" className="email-section__email-input" />
                    <div className="email-section__check-box">
                        <input type="checkbox"/>
                        <p>Receive occasional newsletter</p>
                    </div>
                </div>

                <div className="important-information">
                    <h3 className="address-title">Shipping address</h3>

                    <div className="important-information__register">
                        <input type="text" name="" id="" placeholder="First name*"/>
                        <input type="text" name="" id="" placeholder="Last name*" />
                        <input type="text" name="" id="" placeholder="Phone number*" />
                        <input type="text" name="" id="" placeholder="Postal code" />
                        <input type="text" name="" id="" className="address-input" placeholder="Address" />
                    </div>
                    <p>Receive occasional newsletter billing address same as shipping address</p>
                    <div className="important-information__ship__check-box">
                        <input type="checkbox" />
                        <p>Billing address same as shipping address</p>
                    </div>
                    <div className="important-information__ship__check-box">
                        <input type="checkbox" />
                        <p>I have read and accept the&nbsp; <p className="black-color-font">term & conditions</p></p>
                    </div>
                </div>

            </div>
        </div>

        {/* <div className="bag-section__Summary-section">
            <div className="bag-section__Summary-section__container">
                <h1 className="title">Summary</h1>
                <div className="orders-section">
                    <h3 className="orders-section__title">Product</h3>
                    <div className="products-section"></div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Bag