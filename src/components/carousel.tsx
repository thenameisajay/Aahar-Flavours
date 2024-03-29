import Image from "next/image";

import { Carousel } from "antd";

const carouselData = [
  {
    id: 1,
    title: "First Slide",
    image: "/images/carousel/1.webp",
    description: "First Slide Description",
  },
  {
    id: 2,
    title: "Second Slide",
    image: "/images/carousel/2.webp",
    description: "Second Slide Description",
  },
  {
    id: 3,
    title: "Third Slide",
    image: "/images/carousel/3.webp",
    description: "Third Slide Description",
  },
];

// TODO: Positioning is not working , need to fix it

export default function CarouselWithContent() {
  return (
    <div className="bg-white">
      <Carousel autoplay>
        {carouselData.map((data) => (
          <div key={data.id} className="w-full">
            <Image src={data.image} alt={data.title} width={100} height={100} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
