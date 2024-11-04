import { useCart } from "../context/cart";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { items } = useCart();
  const totalQuantity = items.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
  return (
    <section className="bg-white p-5 rounded-lg place-self-start w-full sticky top-0 ">
      <h1 className="text-red font-bold text-xl mb-10">
        Your Cart ({totalQuantity}){" "}
      </h1>
      {items.length ? <CartList /> : <EmptyCart />}
    </section>
  );
};

export default Cart;
