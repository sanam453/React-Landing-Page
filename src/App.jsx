import React from "react";
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
      <Hero />
      <Brands />
      <About />
      <CaseStudies />
      <Pricing />
      <Faqs />
      <Form />
      <CarouselCard />
      <Footer />
    </>
  );
}

export default App;
