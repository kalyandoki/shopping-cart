import React, { useState, useEffect } from "react";
import CartItems from "../components/CartItems";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    try {
      const res = await fetch("https://fakestoreapi.in/api/products");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    } catch (err) {
      console.error("Error : ", err.message);
      setLoading(false);
    }
  }
  console.log(products);
  // console.log(loading);

  useEffect(() => {
    getProducts();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="relative top-15 h-screen flex flex-col justify-center item-center text-4xl font-bold text-center">
        Loading Products...
      </div>
    );
  }

  return (
    <div className="relative top-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {products.map((items, index) => (
          <CartItems key={index} items={items} />
        ))}
      </div>
    </div>
  );
}

export default Home;
