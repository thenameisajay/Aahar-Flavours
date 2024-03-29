"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

import Header from "@/components/header";
import CarouselWithContent from "@/components/carousel";
import About from "@/components/about";
import Foods from "@/components/foods";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Toaster />
      <Header />
      <CarouselWithContent />
      <Foods />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
