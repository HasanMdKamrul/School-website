import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { ProductsData } from "../components/Contexts/Context";
import { Header } from "../components/Header/Header";




const Main = () => {

  const products = useLoaderData();
 

  return (
    
      <ProductsData.Provider value={products}>
        <Header />
        <Outlet />
      </ProductsData.Provider>
    
  );
};

export default Main;
