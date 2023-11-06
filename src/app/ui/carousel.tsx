import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselWithContent() {
  return (
    <div className="mx-auto mt-2  w-11/12 h-4/5 rounded-lg  justify-center items-center">
      <Carousel stopOnHover={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <Image
            className="rounded-2xl"
            src="/images/carousel/1.webp"
            alt="ist Pic"
            width={800}
            height={800}
          />
        </div>
        <div>
          <Image
            className="rounded-2xl"
            src="/images/carousel/2.webp"
            alt="2nd Pic"
            width={800}
            height={800}
          />
        </div>
        <div>
          <Image
            className="rounded-2xl"
            src="/images/carousel/3.webp"
            alt="3rd Pic"
            width={800}
            height={800}
          />
        </div>
      </Carousel>
    </div>
  );
}
