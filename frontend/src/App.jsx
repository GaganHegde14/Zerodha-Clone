import { useState } from "react";
import HomePage from "./landing_page/home/HomePage";
import { Routes, Route } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/price/Pricingpage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Home from "./dashboard/components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/dashboard" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
