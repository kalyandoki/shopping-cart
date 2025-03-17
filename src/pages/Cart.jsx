import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../store/slices/cart-slice";
function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    setTotalCart(total);
  }, [cart]);
  console.log(cart, totalCart);

  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <>
      <div className=" relative top-10 container mx-auto px-4 py-8">
        {/* Cart Items Section */}
        {cart && cart.length ? (
          <div className="bg-[#8ff38f6e] shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Your Cart Items
            </h1>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-300"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-30 h-40 object-cover rounded-lg"
                  />

                  {/* Product Info */}
                  <div className="text-center sm:text-left">
                    <h2 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 font-semibold">${item.price}</p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveCart(item)}
                    className="text-red-600 font-medium transition duration-200 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center p-10 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800">Cart is Empty</h1>
            <p className="text-gray-600 mt-2">
              Please add some items to the cart.
            </p>
            <Link to="/">
              <button className="mt-4 bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        {/* Cart Summary Section */}
        <div className="mt-8 p-6 w-1/2 bg-[#e859df79] rounded-lg shadow-md text-center flex flex-col items-center mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">Cart Summary</h1>
          <h2 className="text-xl font-semibold mt-2">
            Total: <span className="text-blue-600">${totalCart}</span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Cart;
