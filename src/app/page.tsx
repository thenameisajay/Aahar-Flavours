'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import About from '@/components/About';
import CarouselWithContent from '@/components/Carousel';
import Foods from '@/components/FoodComponent';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

// import Testimonials from '@/components/testimonials';

export default function Home() {
    return (
        <div className="flex flex-col">
            <Toaster />
            <Header />
            <CarouselWithContent />
            <Foods />
            <About />
            {/* <Testimonials /> */}
            <Footer />
        </div>
    );
}
