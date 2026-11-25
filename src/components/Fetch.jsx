import React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Fetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        console.error("Xatolik: ", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Mahsulotlar ro'yxati</h1>
      {loading && <Loader />}
      {error && (
        <p className="text-center text-red-500 font-black text-6xl">
          Xatolik yuz berdi: {error}
        </p>
      )}
      <div>
        {products.map((item) => {
          return (
            <div>
              <img src={item.images[0]} alt={item.title} />
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fetch;
