// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { carouselData } from '@/data/carouselData';

// TODO: Rewrite the carousel component to use the another library

export default function CarouselWithContent() {
    return (
        <div className=" w-full px-2  justify-center flex items-center">
            <Carousel>
                <CarouselContent>
                    {carouselData.map((item, index) => (
                        <CarouselItem key={index}>
                            <Image
                                className="rounded-2xl"
                                src={item.src}
                                alt={item.alt}
                                width={800}
                                height={800}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
{
    /* <Carousel
                    stopOnHover={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    dynamicHeight={true}
                    showThumbs={false}
                >
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
                </Carousel> */
}
