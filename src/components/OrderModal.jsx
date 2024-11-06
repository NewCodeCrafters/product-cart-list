import { useCart } from "../context/cart";
import OrderItem from "./OrderItem";

const OrderModal = () => {
  const { items, changeShowModal, createOrder } = useCart();
  const total = items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  return (
    <div
      className="fixed top-0 w-full left-0 z-[99999] h-svh bg-black/50 flex items-center justify-center  overflow-y-auto bottom-0 py-4"
      onClick={() => {
        changeShowModal(false);
      }}
    >
      <div
        className="p-4 overflow-y-auto max-h-96 bg-white max-w-lg rounded-md w-full mt-10"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <figure className="w-10 h-10 mb-4">
          <img src="/images/icon-order-confirmed.svg" alt="" />
        </figure>
        <h2 className="font-bold text-rose-900 text-2xl">Order Confirmed</h2>
        <p className="font-normal text-rose-400 text-base">
          We hope you enjoy your food
        </p>
        <ul className="flex flex-col gap-4 p-4 bg-rose-100 rounded">
          {items.map((item) => (
            <OrderItem key={item.id} {...item} />
          ))}

          <li className="flex justify-between items-center">
            <span className="text-base font-normal text-rose-500">
              Order Total
            </span>
            <span className="text-2xl font-bold text-rose-900">
              ${total.toFixed(2)}
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="capitalize bg-red w-full rounded-full h-12 mt-5 flex items-center justify-center font-semibold text-rose-50 text-base"
          onClick={createOrder}
        >
          start new order
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
