import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3  max-w-6xl mx-auto py-10 max:sm px-3">
      <ProductList />
      <Cart />
    </main>
  );
}

export default App;
