import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const value = basket.reduce(
    (value, basket) => (value = value + basket.price),
    0
  );

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket?.length} items): <strong> {value} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // part of the homework --before it was getBasketTotal(basket)
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
