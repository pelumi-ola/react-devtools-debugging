import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {products.map((p) => (
        // BUG 1: prop is passed as "cost" but ProductCard reads "price"
        <ProductCard key={p.id} name={p.name} cost={p.price} onAdd={() => onAdd(p)} />
      ))}
    </div>
  );
}
