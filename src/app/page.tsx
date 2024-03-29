'use client';

import About from '@/components/about';
import CarouselWithContent from '@/components/carousel';
import Foods from '@/components/foods';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Testimonials from '@/components/testimonials';
import React from 'react';
import { Toaster } from 'react-hot-toast';

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
