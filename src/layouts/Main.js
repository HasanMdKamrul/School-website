import React, { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { CartContext, ProductsData } from "../components/Contexts/Context";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const Main = () => {
  const { products, initialCart } = useLoaderData();

  const [cart, setCart] = useState(initialCart);

  return (
    <ProductsData.Provider value={products}>
      <CartContext.Provider value={[cart,setCart]}>
        <Header />
        <Outlet />
        <Footer/>
      </CartContext.Provider>
    </ProductsData.Provider>
  );
};

export default Main;
