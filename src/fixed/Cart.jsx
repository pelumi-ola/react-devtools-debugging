import CartItem from "./CartItem";

export default function Cart({ items, onRemove }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  return (
    <div style={{ marginTop: 24 }}>
      <h2>Cart ({items.length})</h2>
      {items.map((item) => (
        // FIX 3: stable unique id as key -> state stays with the right row
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
      <strong>Total: ${total}</strong>
    </div>
  );
}
