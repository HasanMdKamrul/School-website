import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ClassCard from "../ClassCard/ClassCard";
import OrderSummary from "../OrderSummary/OrderSummary";
import "./ClassDetails.css";

export const CardContext = createContext("Card Data");
export const CardDataContext = createContext("Individual Card Context Data");


const ClassDetails = () => {
  const [cart, setCart] = useState([]);
  const data = useLoaderData();

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <CardContext.Provider value={data}>
      <div className="gridLayout">
        <ClassCard addToCart={addToCart} />
        <CardDataContext.Provider value={[cart, setCart]}>
          <section>
            <OrderSummary />
          </section>
        </CardDataContext.Provider>
      </div>
    </CardContext.Provider>
  );
};

export default ClassDetails;
