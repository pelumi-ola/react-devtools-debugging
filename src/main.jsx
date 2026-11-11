import { createRoot } from "react-dom/client";
// Switch between "./buggy/App" and "./fixed/App" to compare behaviour
import App from "./buggy/App";
createRoot(document.getElementById("root")).render(<App />);
