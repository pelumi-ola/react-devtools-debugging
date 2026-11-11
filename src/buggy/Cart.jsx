import CartItem from "./CartItem";

export default function Cart({ items, onRemove }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  return (
    <div style={{ marginTop: 24 }}>
      <h2>Cart ({items.length})</h2>
      {items.map((item, index) => (
        // BUG 3: index used as key -> local state (note) sticks to the wrong row after removal
        <CartItem key={index} item={item} onRemove={onRemove} />
      ))}
      <strong>Total: ${total}</strong>
    </div>
  );
}
