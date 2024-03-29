"use client";
import React from "react";

import Header from "@/components/header";
import CarouselWithContent from "@/components/carousel";
import About from "@/components/about";
import Foods from "@/components/foods";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

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
