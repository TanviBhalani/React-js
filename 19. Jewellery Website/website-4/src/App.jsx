import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Carousel1 from "./Component/Carousel1";
import Product from "./Component/Product";
import FeaturesBar from "./Component/FeaturesBar";
import JewelryShowcase from "./Component/JewelryShowcase";
import JewelryShowCase2 from "./Component/JewelryShowCase2";
import Testimonials from "./Component/Testimonial";
import Banner from "./Component/Banner";
import Brand from "./Component/Brand";
import Newsletter from "./Component/Newsletter";
import Footer from "./Component/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Carousel1 />
      <FeaturesBar/>
      <JewelryShowcase/>
      <Product/>
      <JewelryShowCase2/>
      <Testimonials/>
      <Banner/>
      <Brand/>
      <Newsletter/>
      <Footer/>
      
      
      
    </Router>
  );
}

export default App;




