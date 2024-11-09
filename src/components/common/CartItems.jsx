import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartItems = () => {
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);
  useEffect(() => {
    async function fetchData() {
      if (email) {
        try {
          const result = await axios.get(
            `https://store-backend-oisp.onrender.com/getCart?email=${encodeURIComponent(
              email
            )}`
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
  });
  const handleDelete = async (productName) => {
    if (!email) {
      console.error("No user data found in localStorage");
      return;
    }

    try {
      const result = await axios.delete(
        "https://store-backend-oisp.onrender.com/deleteProduct",
        {
          data: { email: email, productName: productName },
        }
      );
      setProducts(result.data.products);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="bg-black min-h-screen py-5">
      <div className="flex justify-between w-full items-center lg:gap-5 max-w-7xl mx-auto px-3">
        <h1 className="text-2xl md:text-4xl font-bold lg:mb-5 text-white">
          Cart Items
        </h1>

        <Link
          to="/home"
          className="px-3 py-2 rounded-md text-white bg-blue-500 whitespace-nowrap"
        >
          Home
        </Link>
      </div>
      {products.length > 0 ? (
        <div className="grid max-w-7xl mx-auto px-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-2 flex flex-col gap-2 rounded-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto min-h-[200px] object-cover"
              />
              <h2 className="text-2xl">{product.name}</h2>
              <p className="text-lg">{product.description}</p>
              <p className="text-lg">Price: ${product.price}</p>
              <button
                className="px-3 py-2 rounded-md text-white bg-blue-500"
                onClick={() => handleDelete(product.name)}
              >
                Remove from Cart
              </button>
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
