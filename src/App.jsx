import { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}
