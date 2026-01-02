import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import VideoIntro from "./Components/VideoIntro";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Coffee from "./pages/shop/Coffee";
import Shop from "./pages/shop/Shop";
import Bags from "./pages/shop/Bags";
import Cutlery from "./pages/shop/Cutlery";
import Extras from "./pages/shop/Extras";
import Smoothies from "./pages/shop/Smoothies";
import Footer from "./Components/Footer";
import Package from "./pages/package/Package";
import Processing from "./pages/package/Processing";
import Agriculture from "./pages/package/Agriculture";
import Explore from "./pages/package/Explore";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import Company from "./pages/company/Company";
import Waitlist from "./pages/resources/Waitlist";
import Rewards from "./pages/resources/Rewards";
import Blogs from "./pages/resources/Blogs";
import Faqs from "./pages/resources/Faqs";
import Contact from "./pages/contact/Contact";
import ProductPage from "./pages/shop/ProductPage";
import CartPopup from "./Components/CartPopup";
import Cart from "./pages/Cart";
import Deli from "./pages/shop/Deli";
import TakeOut from "./pages/shop/TakeOut";


export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,       // animation happens only once
      offset: 120,      // start animation slightly before view
    });
  }, []);

  const [showIntro, setShowIntro] = useState(false);

  // ✅ Run only once when app loads
  useEffect(() => {
    const introPlayed = sessionStorage.getItem("introPlayed");

    if (!introPlayed) {
      setShowIntro(true); // play video only on first open
    }
  }, []);

  const handleIntroFinish = () => {
    sessionStorage.setItem("introPlayed", "true"); // mark as played
    setShowIntro(false);
  };


  function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  return (
    <BrowserRouter>

    <ScrollToTopOnRouteChange />

      {/* INTRO VIDEO (ONLY FIRST OPEN) */}
      {showIntro && <VideoIntro onFinish={handleIntroFinish} />}

      {/* MAIN WEBSITE */}
      <div
  className={`
    transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
    ${showIntro ? "opacity-0 pointer-events-none" : "opacity-100"}
  `}
>
  <Navbar />
  <CartPopup/>

  <main className="pt-22">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/package" element={<Package />} />
      <Route path="/processing" element={<Processing />} />
      <Route path="/agriculture" element={<Agriculture />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/faqs" element={<Faqs />} />

      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/coffee" element={<Coffee />} />
      <Route path="/shop/bags" element={<Bags />} />
      <Route path="/shop/cutlery" element={<Cutlery />} />
      <Route path="/shop/extras" element={<Extras />} />
      <Route path="/shop/smoothies" element={<Smoothies />} />
      <Route path="/shop/deli" element={<Deli />} />
      <Route path="/shop/takeout" element={<TakeOut />} />

      <Route path="/product/:slug" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </main>
</div>

    </BrowserRouter>
  );
}