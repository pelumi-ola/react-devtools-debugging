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

  // FIX 2: create a NEW array (immutable update); bump qty if item already in cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      return existing
        ? prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Mini Shop (fixed)</h1>
      <ProductList products={PRODUCTS} onAdd={addToCart} />
      <Cart items={cart} onRemove={removeFromCart} />
    </div>
  );
}
