import axios from "axios";
import React, { useEffect, useState } from "react";

const CartItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const email = localStorage.getItem("email");
      if (email) {
        try {
          const result = await axios.get(
            `http://localhost:3000/getCart?email=${encodeURIComponent(email)}`
          );
          if (result.data.products.length > 0) {
            setProducts(result.data.products);
          }
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      } else {
        console.error("No user data found in localStorage");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-black h-screen pt-5">
      <h1 className="text-white text-4xl font-bold text-center">Cart Items</h1>

      {products.length > 0 ? (
        <div className="grid max-w-7xl mx-auto px-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-2 flex flex-col gap-2 rounded-md"
            >
              <img src={product.image} alt={product.name} className="mx-auto" />
              <h2 className="text-2xl">{product.name}</h2>
              <p className="text-lg">{product.description}</p>
              <p className="text-lg">Price: ${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white text-center mt-4">No items in the cart.</p>
      )}
    </div>
  );
};

export default CartItems;
