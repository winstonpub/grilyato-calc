import { useCallback } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Calculator from "./components/Calculator";
import Sections from "./components/Sections";

export default function App() {
  const scrollToCalc = useCallback(() => {
    document.getElementById("calc")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero onStart={scrollToCalc} />
        <Calculator />
        <Sections />
      </main>
    </div>
  );
}
