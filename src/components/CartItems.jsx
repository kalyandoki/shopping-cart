import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart-slice";
function CartItems({ items }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(items));
  }

  function handleRemoveCart() {
    console.log("removed");
    dispatch(removeFromCart(items.id));
  }

  return (
    <div className="flex flex-col border-2 border-solid border-gray-800 md:flex-row items-center gap-6 p-5 w-full max-w-md md:max-w-2xl bg-[#b1c2c388] shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image Section */}

      <div className="w-full md:w-1/3">
        <img
          src={items.image}
          alt={items.title}
          className="w-full h-40 md:h-48 object-cover rounded-lg transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between text-center md:text-left w-full md:w-2/3 p-3">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">
          {items.title}
        </h2>
        <p className="text-gray-500 text-sm md:text-base font-medium">
          ${items.price}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={
            cart.some((ele) => ele.id === items.id)
              ? handleRemoveCart
              : handleAddToCart
          }
          className="mt-3 w-full md:w-40 bg-green-600 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95"
        >
          {cart.some((ele) => ele.id === items.id)
            ? "Remove From Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default CartItems;
