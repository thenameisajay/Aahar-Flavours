'use client';

import React, { Fragment, useState } from 'react';
import toast from 'react-hot-toast';

import Image from 'next/image';

import { CartItem } from '@/types/interfaces/interfaces';
import { Dialog, Transition } from '@headlessui/react';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useLocalStorage } from 'usehooks-ts';

import { products } from '@/data/productData';

function truncateDescription(description: string, maxLength: number) {
    if (description.length > maxLength) {
        return description.slice(0, maxLength) + '...';
    }
    return description;
}

const ProductDisplayComponent = () => {
    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none   lg:h-80">
                        <Image
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:opacity-75"
                            width={200}
                            height={200}
                        />
                    </div>
                    <p className="mt-1 text-sm text-gray-500 group-hover:opacity-100 z-50">
                        {truncateDescription(product.description, 150)}
                    </p>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-black font-bold">
                                <a href={product.href}>
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0 text-black"
                                    />
                                    {product.name}
                                </a>
                            </h3>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                            {'£' + product.price}
                        </p>
                    </div>
                    <BuyingOptions productName={product.name} />
                </div>
            ))}
        </div>
    );
};

export default function Foods() {
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Order Online
                    </h2>
                    <p className="mt-4 text-gray-500 font-bold">
                        Some of our most popular dishes
                    </p>
                    <ProductDisplayComponent />
                </div>
            </div>
        </>
    );
}

const BuyingOptions = ({ productName }: { productName: string }) => {
    const [, setCartData] = useLocalStorage('cart', []);
    const [isOpen, setIsOpen] = useState(false);
    function BuyModal() {
        if (isOpen) {
            setIsOpen(!isOpen);
        } else {
            setIsOpen(true);
        }
    }

    function closeModal() {
        setIsOpen(!isOpen);
    }

    function addToCart(name: string) {
        const productToAdd = products.find((product) => product.name === name);

        if (!productToAdd) {
            toast.error('Product not found');
            return;
        }
        const cart = JSON.parse(localStorage.getItem('cart') || '[]'); //hacky way to get around typescript error

        const updatedCart = cart.map((item: CartItem) => {
            if (item.name === name) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                    price: item.price + productToAdd.price,
                };
            }
            return item;
        });

        const itemExists = cart.some((item: CartItem) => item.name === name);

        if (!itemExists) {
            updatedCart.push({ name, price: productToAdd.price, quantity: 1 });
        }

        setCartData(updatedCart);
        toast.success('Item added to cart');
    }

    return (
        <div className="group relative mt-3">
            <div className=" text-center flex flex-row justify-between px-2">
                <div>
                    <button
                        className="flex flex-row inset-0 items-center rounded-md py-[0.4375rem]pl-2 pr-2 p-2   w-28 h-10 text-sm font-semibold lg:pr-3 bg-white shadow hover:bg-green-500"
                        type="button"
                        onClick={() => BuyModal()}
                    >
                        <ShoppingBag height={20} width={20} />
                        <p className="ml-3 text-sm visible">Buy Now</p>
                    </button>
                </div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={closeModal}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Order Confirmation
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Your order has been placed and
                                                will be ready for collection in
                                                30 minutes.
                                            </p>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={() => closeModal()}
                                            >
                                                Got it, thanks!
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>

                <button
                    className="flex flex-row items-center rounded-md py-[0.4375rem] w-20  h-10 pl-2 pr-2 text-sm font-semibold lg:pr-3 bg-white shadow hover:bg-green-500"
                    type="button"
                    onClick={() => addToCart(productName)}
                >
                    <ShoppingCart />
                    <p className="ml-2 text-sm visible">Add </p>
                </button>
            </div>
        </div>
    );
};
