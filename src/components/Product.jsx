import React from "react";

const Product = (props) => {
  return (
    <article>
      <figure className="rounded-md overflow-hidden">
        <picture>
          <source media="(min-width: 1100px )" srcSet={props.image.desktop} />
          <source media="(min-width: 700px )" srcSet={props.image.tablet} />

          <img src={props.image.mobile} alt="" />
        </picture>
      </figure>
      <button className="flex bg-rose-50 w-full max-w-40 py-2 px-2 justify-center items-center gap-2 rounded-full mx-auto border border-rose-300 -mt-5 relative z-50 mb-2">
        <img src="/images/icon-add-to-cart.svg" alt="" />
        <span className="text-rose-900 font-semibold">Add to Cart</span>
      </button>
      <span className="text-rose-300 font-normal text-sm">
        {props.category}
      </span>
      <h2 className="text-rose-900 text-lg font-semibold">{props.name}</h2>
      <span className="text-red font-semibold text-lg">
        ${props.price.toFixed(2)}
      </span>
    </article>
  );
};

export default Product;
