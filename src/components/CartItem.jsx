/* eslint-disable react/prop-types */

import { useCart } from "../context/cart";

const CartItem = (props) => {
  const { deleteProduct } = useCart();
  return (
    <li className="flex justify-between items-center border-b border-b-rose-100 pb-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-rose-900 font-semibold text-base">{props.name}</h2>
        <div className="flex gap-2 ">
          <span className="text-red font-semibold text-sm">
            {props.quantity}x
          </span>
          <span className="font-normal text-rose-400 text-sm">
            @ ${props.price.toFixed(2)}
          </span>
          <span className="font-semibold text-rose-500 text-sm">
            ${(props.quantity * props.price).toFixed(2)}
          </span>
        </div>
      </div>
      <button
        className="w-4 h-4 rounded-full border border-rose-500 flex items-center justify-center"
        onClick={() => deleteProduct(props.id)}
      >
        <img src="/images/icon-remove-item.svg" alt="" />
      </button>
    </li>
  );
};

export default CartItem;
