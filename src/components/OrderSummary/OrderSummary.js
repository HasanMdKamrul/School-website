import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { resetLocalStorage } from "../../ManageDb/ManageDb";
import CartIndividual from "../CartIndividual/CartIndividual";
import { CartContext } from "../Contexts/Context";

const OrderSummary = () => {
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();

  const shopButtonHandler = () => {
    navigate(`/classes`);
  };

  const checkOutHandler = () => {
    if (cart.length) {
      setCart([]);
      resetLocalStorage();

      toast.success("Order Placed", {
        autoClose: 500,
        position: "top-center",
      });
    } else {
        toast.error("Please place an order", {
        autoClose: 500,
        position: "top-center",
      });
    }
  };

  const totalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 justify-center items-center">
        <h2 className="text-xl text-lime-600 font-semibold">
          Added Products To Cart
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.length > 0 ? (
            cart.map((item) => <CartIndividual key={item._id} item={item} />)
          ) : (
            <button
              className="py-1 px-3 text-white bg-sky-400 rounded hover:bg-sky-900"
              onClick={() => shopButtonHandler()}
            >
              Go To Shop
            </button>
          )}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">{totalPrice}€</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={shopButtonHandler}
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          <button
            onClick={() => checkOutHandler()}
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
