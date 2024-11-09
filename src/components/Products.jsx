import axios from "axios";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);
  const PRODUCTS = [
    {
      image:
        "https://imgs.search.brave.com/NGia3GJR2sHhb33mVnowlM9bFh82UXrybRUNeGP4Kpo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MjQyMDExOC9waG90/by9nYW1lci1jb21w/dXRlci1pbi1jeWJl/ci1jYWZlLWlsbHVt/aW5hdGVkLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0xNWxu/SWkycFBVcTl6bVdD/M2FrcXhJUzVzZHQx/OHBpdjAyUjZPZ1hS/VkpBPQ",
      name: "Product 1",
      description: "This is a laptop lorem ipsum dolor sit amet",
      price: 100,
    },
    {
      image:
        "https://imgs.search.brave.com/ZPde1WWdziHYdCvYHgKyedd5rgnedNTzw1ZfzbffNr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzY0Lzg1LzE2/LzM2MF9GXzU2NDg1/MTY5OV9yYWlpYUdx/Z2psTndNMzZBQW1T/NmNQUDZFZWFBQ3VH/ei5qcGc",
      name: "Product 2",
      description: "This is a laptop lorem ipsum dolor sit amet",
      price: 200,
    },
    {
      image:
        "https://imgs.search.brave.com/CYl4X7mmALxSe2_IU3x7tvXpXquqmj_utC9pkTbeF1M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTcy/Nzg3LmpwZw",
      name: "Product 3",
      description: "This is a product lorem ipsum dolor sit amet",
      price: 300,
    },
    {
      image:
        "https://imgs.search.brave.com/5mIG_1n1jiyHnVqD8gpx4jwa_NfhWZq5kcgU4T6xdF4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9nYW1pbmctc2V0/dXAtd2l0aC1uZW9u/LWxpZ2h0cy1mdXR1/cmlzdGljLWltYWdl/LW1vbml0b3JfMTAz/Mjg4OS00MzEwLmpw/Zz9zZW10PWFpc19o/eWJyaWQ",
      name: "Product 3",
      description: "This is a product lorem ipsum dolor sit amet",
      price: 300,
    },
  ];
  const ADDCART = (product) => {
    axios.post("http://localhost:3000/addProduct", {
      email: email,
      product: product,
    });
  };
  return (
    <div className="max-w-7xl mx-auto pt-5 px-3">
      <h1 className="text-4xl font-bold text-white text-center">Products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-5">
        {PRODUCTS.map((product, index) => (
          <div
            className="bg-white p-2 flex flex-col gap-2 rounded-md"
            key={index}
          >
            <img
              src={product.image}
              className="w-full rounded-md min-h-[200px] object-cover"
              alt={product.name}
            />
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-lg">{product.description}</p>
            <p className="text-xl font-bold">{product.price}</p>
            <button
              className="px-3 py-2 rounded-md text-white bg-blue-500"
              onClick={() => ADDCART(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
