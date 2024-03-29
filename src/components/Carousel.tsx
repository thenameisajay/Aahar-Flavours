'use client';

import Image from 'next/image';

import { Carousel } from 'flowbite-react';

import { carouselData } from '@/data/carouselData';

export default function CarouselComponent() {
    return (
        <div className=" h-56 sm:h-64 xl:h-80 2xl:h-96 mx-7 ">
            <Carousel slideInterval={2500}>
                {carouselData.map((item) => (
                    <div key={item.alt}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            className="object-cover w-full h-full"
                            width={1000}
                            height={1000}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
