/* eslint-disable react/prop-types */

import { useCart } from "../context/cart";

const Product = (props) => {
  const { items, addToCart, decreaseQuantity, increaseQuantity } = useCart();
  const cartItem = items.find((item) => item.id === props.id);
  return (
    <article>
      <figure className="rounded-md overflow-hidden">
        <picture>
          <source media="(min-width: 1100px )" srcSet={props.image.desktop} />
          <source media="(min-width: 700px )" srcSet={props.image.tablet} />

          <img src={props.image.mobile} alt="" />
        </picture>
      </figure>
      {cartItem ? (
        <div className="bg-red w-full max-w-40 mx-auto px-2 py-3 rounded-full flex justify-between items-center -mt-5 relative z-50">
          <button
            className="border border-rose-100 rounded-full w-4 h-4 flex items-center justify-center"
            disabled={cartItem.quantity <= 1}
            onClick={() => decreaseQuantity(props.id)}
          >
            <img src="/images/icon-decrement-quantity.svg" />
          </button>
          <span className="text-white font-normal text-base">
            {cartItem.quantity}
          </span>
          <button
            className="border border-rose-100 rounded-full w-4 h-4 flex items-center justify-center"
            onClick={() => increaseQuantity(props.id)}
          >
            <img src="/images/icon-increment-quantity.svg" />
          </button>
        </div>
      ) : (
        <button
          className="flex bg-rose-50 w-full max-w-40 py-2 px-2 justify-center items-center gap-2 rounded-full mx-auto border border-rose-300 -mt-5 relative z-50 mb-2"
          onClick={() => addToCart({ ...props, quantity: 1 })}
        >
          <img src="/images/icon-add-to-cart.svg" alt="" />
          <span className="text-rose-900 font-semibold">Add to Cart</span>
        </button>
      )}
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
