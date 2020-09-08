import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {

  const [{basket}, dispatch] = useStateValue();
  
  console.log(basket);

  const reducer = (accumulator, currentValue) => accumulator + currentValue.price;

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.coolmilk.com/wp-content/uploads/250-newsletter-banner-advert.png"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal items={basket.length} totalvalue={basket.reduce(reducer,0)}/>
      </div>
    </div>
  );
}

export default Checkout;
