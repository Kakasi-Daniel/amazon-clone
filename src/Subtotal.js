import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal({items,totalvalue}) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(totalvalue) => (
          <>
            <p>
              {/* {Part of HW} */}
            Subtotal ({items} items) : <strong>{totalvalue}</strong>
            </p>
            <small className="subtotal__gift" >
              <input type="checkbox"/>
              This orders contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalvalue} //HW
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
