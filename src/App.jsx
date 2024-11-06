import Cart from "./components/Cart";
import OrderModal from "./components/OrderModal";
import ProductList from "./components/ProductList";
import { useCart } from "./context/cart";

function App() {
  const { showModal } = useCart();
  return (
    <main className="grid gap-6 grid-cols-1 md:grid-cols-3  max-w-6xl mx-auto py-10 max:sm px-3">
      <ProductList />
      <Cart />
      {showModal && <OrderModal />}
    </main>
  );
}

export default App;
