import React, { createContext, useContext } from "react";
import { CardDataContext } from "../ClassDetails/ClassDetails";
import Pricing from "../Pricing/Pricing";

export const PriceContext = createContext(0);

const OrderSummary = () => {
  const [cart] = useContext(CardDataContext);

  const totalPrice = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );

  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">Order Summary</h1>
      <PriceContext.Provider value={totalPrice}>
        <Pricing/>
      </PriceContext.Provider>
    </div>
  );
};

export default OrderSummary;
