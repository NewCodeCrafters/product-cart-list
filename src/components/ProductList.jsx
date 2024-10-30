import React from "react";
import products from "../assets/data.json";
import Product from "./Product";
const ProductList = () => {
  return (
    <section className="md:col-span-2  ">
      <h1 className="text-rose-900 font-bold text-3xl mb-4">Desserts</h1>
      <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1">
        {products.map((product, i) => (
          <Product key={i} {...product} id={i} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
