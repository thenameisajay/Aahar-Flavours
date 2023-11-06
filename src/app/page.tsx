"use client";
import React from "react";

// Importing the components
import Header from "./ui/header";
import CarouselWithContent from "./ui/carousel";
import Foods from "./ui/foods";
import About from "./ui/about";
import Testimonials from "./ui/testimonials";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <CarouselWithContent />
      <About />
      <Foods />
      <Testimonials />

      <Footer />
    </>
  );
}
