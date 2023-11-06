"use client";
import React from "react";

// Importing the components
import Header from "./ui/header";
import Carousel from "./ui/carousel";
import Foods from "./ui/foods";
import About from "./ui/about";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-28  -mb-14">
        <About />
      </div>
      <Foods />
    </>
  );
}
