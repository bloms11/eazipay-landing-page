import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import HowItWorks from "./components/HowItWorks";
import Salary from "./components/Salary";
import Demo from "./components/Demo";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Salary />
      <Demo />
    </div>
  );
}

export default App;
