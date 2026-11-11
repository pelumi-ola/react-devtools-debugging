import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {products.map((p) => (
        // FIX 1: prop name now matches what ProductCard reads
        <ProductCard key={p.id} name={p.name} price={p.price} onAdd={() => onAdd(p)} />
      ))}
    </div>
  );
}
