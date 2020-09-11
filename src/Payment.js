import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement } from '@stripe/react-stripe-js';
import FlipMove from 'react-flip-move';
import { getBasketTotal } from './reducer';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* delivery */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Addres</h3>
          </div>
          <div className="payment__addres">
            <p>{user?.email}</p>
            <div className="payment__inputs">
            <input type="text" placeholder="Your address"/>
            <input type="text" placeholder="Postal code"/>
            <input type="text" placeholder="Phone number"/>
            </div>
          </div>
        </div>

        {/* review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <FlipMove>
                <CheckoutProduct
                key={item.id + Math.random()}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
              </FlipMove>
            ))}
          </div>
        </div>

        {/* payment section */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            {/* Stripe magic will go */}

            <form>
              <CardElement />

              <div className="payment__priceContainer">
            <h3>Oder total: {getBasketTotal(basket).toFixed(2)}$</h3>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
