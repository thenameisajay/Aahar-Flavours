import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as React from "react";
import Stack from "@mui/joy/Stack";
import Card from "@mui/joy/Card";

export default function CarouselWithContent() {
  return (
    <div className="mx-auto mt-2  rounded-lg w-8/12">
      <Card size="lg">
        <Carousel className="rounded-lg w-full">
          <div>
            <Image
              src="/images/carousel/1.webp"
              alt="ist Pic"
              width={800}
              height={800}
            />
          </div>
          <div>
            <Image
              src="/images/carousel/2.webp"
              alt="2nd Pic"
              width={800}
              height={800}
            />
          </div>
          <div>
            <Image
              src="/images/carousel/3.webp"
              alt="3rd Pic"
              width={800}
              height={800}
            />
          </div>
        </Carousel>
      </Card>
    </div>
  );
}
