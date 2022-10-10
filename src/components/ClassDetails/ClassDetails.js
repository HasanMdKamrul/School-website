// import React, { useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import { setDataToLocalStorage } from "../../ManageDb/ManageDb";
import ClassCard from "../ClassCard/ClassCard";
import { CartContext } from "../Contexts/Context";
import "./ClassDetails.css";

const ClassDetails = () => {
  const [cart, setCart] = useContext(CartContext);

  // const [cart, setCart] = useState([]);
  const data = useLoaderData();

  const addToCart = (product) => {
    const existedProductInCart = cart.find((item) => item._id === product._id);

    let newCart = [];

    if (!existedProductInCart) {
      product["quantity"] = 1;
      newCart = [...cart, product];
    } else {
      const restItemsInCart = cart.filter((item) => item._id !== product._id);
      product["quantity"] = product["quantity"] + 1;
      newCart = [...restItemsInCart, product];
    }

    setDataToLocalStorage(product._id);

    setCart(newCart);
    // ** TOAST

    toast.success("Added to cart", {
      position: "top-center",
      autoClose: 500,
      theme: "light",
    });
  };

  return (
    <div>
      <ClassCard addToCart={addToCart} data={data} />
    </div>
  );
};

export default ClassDetails;
