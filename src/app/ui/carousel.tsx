import React from "react";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <div className="carousel flex w-[1000px]  items-center justify-center ml-10">
        <div id="slide1" className="carousel-item relative  w-full">
          <Image
            src="/images/carousel/slider-image1.webp"
            className="w-full"
            width={200}
            height={200}
            alt="slider-image1"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/images/carousel/slider-image2.webp"
            className="w-full"
            width={200}
            height={200}
            alt="slider-image2"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="/images/carousel/slider-image3.webp"
            className="w-full"
            width={200}
            height={200}
            alt="slider-image3"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
