import { useCart } from "../context/cart";
import CartItem from "./CartItem";

const CartList = () => {
  const { items, changeShowModal } = useCart();
  const total = items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
      <div className="flex justify-between items-center mt-5">
        <span className="text-rose-900 font-normal text-sm capitalize">
          order total
        </span>
        <span className="text-rose-900 font-bold text-2xl">
          ${total.toFixed(2)}
        </span>
      </div>
      <button
        className="bg-red w-full h-12 rounded-full capitalize text-rose-50 font-semibold text-base flex items-center justify-center mt-5"
        onClick={() => changeShowModal(true)}
      >
        Confirm order
      </button>
    </div>
  );
};

export default CartList;
