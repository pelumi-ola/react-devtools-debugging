import { useState } from "react";

export default function CartItem({ item, onRemove }) {
  const [note, setNote] = useState("");
  return (
    <div style={{ display: "flex", gap: 8, margin: "6px 0" }}>
      <span>{item.name} x{item.qty} (${item.price})</span>
      <input placeholder="note" value={note} onChange={(e) => setNote(e.target.value)} />
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}
