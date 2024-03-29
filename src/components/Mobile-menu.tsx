'use client';

import React, { Fragment, useState } from 'react';

import Image from 'next/image';

import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { mainNav } from '@/config/docs';

const ExtraInfoComponent = () => {
    return (
        <>
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <div className="flow-root">
                    <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                    >
                        <div className="flex flex-row items-center">
                            <Phone width={20} height={20} />
                            <p className=" ml-2 text-start">(07443353419) </p>
                        </div>
                    </a>
                </div>
                <div className="flow-root">
                    <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                    >
                        Order
                    </a>
                </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
                <a href="#" className="-m-2 flex items-center p-2">
                    <Image
                        src="/svg/union-jack.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                        width={100}
                        height={100}
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                        GBP
                    </span>
                    <span className="sr-only">, change currency</span>
                </a>
            </div>
        </>
    );
};

const LinkProviderComponent = () => {
    return (
        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            {mainNav.map((item) => (
                <div key={item.title} className="flow-root">
                    <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                    >
                        <div className="flex flex-row items-center">
                            {item.icon}
                            <p className=" ml-2 text-start">{item.title} </p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

const DrawerComponent = () => {
    const [open, setOpen] = useState(false);

    const DialogComponent = () => {
        return (
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                                <LinkProviderComponent />
                                <ExtraInfoComponent />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        );
    };

    return (
        <>
            <Button
                variant="ghost"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
            >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Button>
            <DialogComponent />
        </>
    );
};

export default function MobileMenu() {
    return <DrawerComponent />;
}
