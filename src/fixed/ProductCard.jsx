export default function ProductCard({ name, price, onAdd }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8 }}>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={onAdd}>Add to cart</button>
    </div>
  );
}
