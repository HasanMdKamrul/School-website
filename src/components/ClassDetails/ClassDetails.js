import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import ClassCard from "../ClassCard/ClassCard";
import OrderSummary from "../OrderSummary/OrderSummary";
import "./ClassDetails.css";

export const CardContext = createContext("Card Data");

const ClassDetails = () => {
  const data = useLoaderData();
  return (
    <CardContext.Provider value={data}>
      <div className="gridLayout">
        <ClassCard />
        <section>
          <OrderSummary />
        </section>
      </div>
    </CardContext.Provider>
  );
};

export default ClassDetails;
