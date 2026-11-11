import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const PRODUCTS = [
  { id: 1, name: "Notebook", price: 5 },
  { id: 2, name: "Pen", price: 2 },
  { id: 3, name: "Backpack", price: 30 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  // BUG 2: mutates the existing array, then sets the SAME reference -> no re-render
  const addToCart = (product) => {
    cart.push({ ...product, qty: 1 });
    setCart(cart);
  };

  const removeFromCart = (id) => setCart(cart.filter((i) => i.id !== id));

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Mini Shop (buggy)</h1>
      <ProductList products={PRODUCTS} onAdd={addToCart} />
      <Cart items={cart} onRemove={removeFromCart} />
    </div>
  );
}
