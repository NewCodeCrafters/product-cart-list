/* eslint-disable react/prop-types */

import { useCart } from "../context/cart";
import CartItem from "./CartItem";

const CartList = () => {
  const { items } = useCart();
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
