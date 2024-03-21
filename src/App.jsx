import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./widgets/layout/footer";
import Form from "./pages/form";
import Pricing from "./pages/pricing";
import CaseStudies from "./pages/case-studies";
import About from "./pages/about";
import CarouselCard from "./widgets/cards/carousel-card";
import Hero from "./pages/hero";
import Faqs from "./pages/faqs";
import Brands from "./pages/brands";

function App() {
  return (
    <>
      <BrowserRouter>
        <Hero />
        <Brands />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/carousel-card" element={<CarouselCard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
