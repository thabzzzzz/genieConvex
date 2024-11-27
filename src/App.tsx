import { ConvexProvider, ConvexReactClient } from "convex/react";
import Home from "./views/home";
import "./App.css";

const convexUrl = import.meta.env.VITE_CONVEX_URL;
console.log("Convex URL:", convexUrl);

if (!convexUrl) {
  throw new Error("VITE_CONVEX_URL is not set");
}

const convex = new ConvexReactClient(convexUrl);

function App() {
  return (
    <ConvexProvider client={convex}>
      <div>
        <Home />
      </div>
    </ConvexProvider>
  );
}

export default App;
