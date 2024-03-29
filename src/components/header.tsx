'use client';

import Image from 'next/image';

import { Phone } from 'lucide-react';

import MobileMenu from '@/components/Mobile-menu';
import CartComponent from '@/components/cart/Cart-component';

export default function Header() {
    return (
        <div className="bg-white">
            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-green-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    Get free delivery on orders over £30
                </p>

                <nav
                    aria-label="Top"
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center text-center">
                            {/* Logo */}
                            <MobileMenu />
                            <div className="ml-4 flex text-center flex-row lg:ml-0">
                                <a href="#">
                                    <span className="sr-only">
                                        Aahar Flavours
                                    </span>
                                    <Image
                                        src="/images/logo/logo-removebg-preview.png"
                                        alt="Aahar Flavours Logo"
                                        width={35}
                                        height={35}
                                        className="mr-1"
                                    />
                                </a>
                                <h2 className="   justify-center  text-base p-1 text-green-500  font-sans italic font-extrabold">
                                    Aahar Flavours
                                </h2>
                            </div>
                            {/* Section buttons here */}

                            <div className="ml-auto flex items-center">
                                <MoreDetailsComponent />
                                <CartComponent />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

const MoreDetailsComponent = () => {
    return (
        <>
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800 flex flex-row justify-center items-center"
                >
                    <Phone width={20} height={20} />
                    <p className=" ml-2 text-start">(07443353419) </p>
                </a>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                    Order
                </a>
            </div>
            <div className="hidden lg:ml-8 lg:flex">
                <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                >
                    <Image
                        src="/svg/union-jack.svg"
                        alt="United Kingdom flag"
                        className="block h-auto w-5 flex-shrink-0"
                        width={50}
                        height={50}
                    />
                    <span className="ml-3 block text-sm font-medium">GBP</span>
                    <span className="sr-only">, change currency</span>
                </a>
            </div>
        </>
    );
};
