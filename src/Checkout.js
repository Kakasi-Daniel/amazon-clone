import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(basket);


  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.filepicker.io/api/file/Ons9PGIJSKCAtl19GgJN"
          alt=""
        />
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <FlipMove>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id + Math.random()}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

// import React, { forwardRef } from 'react';
// import './Checkout.css';
// import Subtotal from './Subtotal';
// import { useStateValue } from './StateProvider';
// import CheckoutProduct from './CheckoutProduct';
// import FlipMove from 'react-flip-move';

// function Checkout() {
//   const [{ basket, user }, dispatch] = useStateValue();

//   console.log(basket);

//   const reducer = (accumulator, currentValue) =>
//     accumulator + currentValue.price;

//   return (
//     <div className="checkout">
//       <div className="checkout__left">
//         <img
//           className="checkout__ad"
//           src="https://www.filepicker.io/api/file/Ons9PGIJSKCAtl19GgJN"
//           alt=""
//         />
//         <div>
//           <h3>Hello {user?.email}</h3>
//           <h2 className="checkout__title">Your shopping Basket</h2>
//           {basket.map((item) => (
//             <CheckoutProduct
//               key={item.id + Math.random()}
//               id={item.id}
//               title={item.title}
//               image={item.image}
//               price={item.price}
//               rating={item.rating}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="checkout__right">
//         <Subtotal
//           items={basket.length}
//           totalvalue={basket.reduce(reducer, 0)}
//         />
//       </div>
//     </div>
//   );
// }

// export default Checkout;
